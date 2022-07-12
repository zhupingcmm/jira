import React from "react";
import { Project, User } from "@src/types";
import { Table, TableProps } from "antd";
import { Link } from "react-router-dom";
import { Pin } from "@src/components/pin";
import { useEditProject } from "./hook.util";

interface ListProps extends TableProps<Project> {
  users: User[];
}
export const List = ({ users, ...restProps }: ListProps) => {
  const { mutate } = useEditProject();
  const handlePinChange = (id: number) => (checked: boolean) => {
    mutate({ id, pin: checked });
  };
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: <Pin disabled={true} checked={true} />,
          render: (value, project) => {
            return (
              <Pin
                checked={project?.pin}
                onCheckedChange={handlePinChange(project.id)}
              />
            );
          },
        },
        {
          title: "名称",
          render: (value, project) => {
            return <Link to={String(project?.id)}>{project?.name}</Link>;
          },
        },
        {
          title: "负责人",
          render: (value, project) => (
            <span>
              {
                users?.find((user) => user?.id === Number(project.personId))
                  ?.name
              }
            </span>
          ),
        },
      ]}
      {...restProps}
    />
  );
};
