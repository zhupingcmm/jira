import React from "react";
import { Project, User } from "@src/types";
import { Table } from "antd";

interface ListProps {
  users: User[];
  list: Project[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <Table
      pagination={false}
      dataSource={list}
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
    />
  );
};
