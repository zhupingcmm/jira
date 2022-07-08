import React from "react";
import { Project, User } from "@src/types";
import { Table, TableProps } from "antd";

interface ListProps extends TableProps<Project> {
  users: User[];
}
export const List = ({ users, ...restProps }: ListProps) => {
  console.log("dataSource", restProps);
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
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
