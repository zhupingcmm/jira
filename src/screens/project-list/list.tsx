import { Table, TableProps } from "antd";
import dayjs from "dayjs";
import React from "react";
import { User } from "./search-panel";

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

interface ListProps extends TableProps<Project>{
  users: User[];
  // list: Project[];
}
export const List = ({ users, ...props}: ListProps) => {
  console.log('abc===',props);
  return (
    <Table
      pagination={false}
      {...props}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "部门",
          dataIndex: "organization"
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
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
              <span>
                {project?.created ? dayjs(project.personId).format('YYYY-MM-DDTHH:mm:ss') : 'N/A'}
              </span>
            )
          }
        }
      ]}
    />
  );
};
