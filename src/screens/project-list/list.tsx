import React from "react";
import { Project, User } from "@src/types";
import { Table, TableProps } from "antd";
import { Link } from "react-router-dom";

interface ListProps extends TableProps<Project> {
  users: User[];
}
export const List = ({ users, ...restProps }: ListProps) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          // dataIndex: "name",
          render: (value, project) => {
            return <Link to={String(project?.id)}>{project?.name}</Link>;
          },
        },
        {
          title: "负责人",
          render: (value, project) => (
            <span>
              {users?.find((user) => user?.id === project.personId)?.name}
            </span>
          ),
        },
      ]}
      {...restProps}
    />
  );
};
