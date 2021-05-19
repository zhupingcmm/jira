import { Table, TableProps } from "antd";
import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import { User } from "./search-panel";
import { Pin } from "componnets/pin";
import { useEditProject } from "./util";

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
  pin: boolean;
}

interface ListProps extends TableProps<Project> {
  users: User[];
  retry?: () => void;
}
export const List = ({ users, ...props }: ListProps) => {
  const { mutate } = useEditProject();
  return (
    <Table
      pagination={false}
      {...props}
      columns={[
        {
          title: <Pin disabled={true} checked={true} />,
          render(value, project) {
            return (
              <Pin
                checked={project.pin}
                onCheckedChange={(pin) => {
                  mutate({ id: project.id, pin }).then(() => {
                    if (props?.retry) props?.retry();
                  });
                }}
              />
            );
          },
        },
        {
          title: "名称",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return (
              <Link to={String(project.id)} key={project?.id}>
                {project.name}
              </Link>
            );
          },
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span key={project?.id}>
                {users.find((user) => user.id === project.personId)?.name ||
                  "N/A"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span key={project?.personId}>
                {project?.created
                  ? dayjs(project.personId).format("YYYY-MM-DDTHH:mm:ss")
                  : "N/A"}
              </span>
            );
          },
        },
      ]}
    />
  );
};
