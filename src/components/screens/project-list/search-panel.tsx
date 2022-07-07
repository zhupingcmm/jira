import { Project, User } from "@src/types";
import { Form, Input, Select } from "antd";
import React from "react";

interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form layout={"inline"} style={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          placeholder="项目名"
          value={param.name}
          onChange={(e) => {
            setParam({
              ...param,
              name: e.target.value,
            });
          }}
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: Number(value),
            });
          }}
        >
          <Select.Option value={0}>负责人</Select.Option>
          {users.map((user) => {
            return <Select.Option value={user?.id}>{user.name}</Select.Option>;
          })}
        </Select>
      </Form.Item>
    </Form>
  );
};
