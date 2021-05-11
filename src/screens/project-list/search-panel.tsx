import React from "react";
import { Input, Select, Form } from "antd";
import { Project } from "./list";
import { UserSelect } from "componnets/user-select";

export interface User {
  id: number;
  name: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <Form layout={"inline"}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
          defaultOptionName={"负责人"}
        />
      </Form.Item>
    </Form>
  );
};
