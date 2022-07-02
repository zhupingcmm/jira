import { Project, User } from "@src/types";
import React from "react";

interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}
export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return (
    <form>
      <div>
        <input
          value={param.name}
          onChange={(e) => {
            setParam({
              ...param,
              name: e.target.value,
            });
          }}
        />
        <select
          value={param.personId}
          onChange={(e) => {
            setParam({
              ...param,
              personId: Number(e.target.value),
            });
          }}
        >
          <option>负责人</option>
          {users.map((user) => {
            return <option value={user?.id}>{user.name}</option>;
          })}
        </select>
      </div>
    </form>
  );
};
