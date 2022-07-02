import React from "react";
import { Project, User } from "@src/types";

interface ListProps {
  users: User[];
  list: Project[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <div className="container">
      <table>
        <thead>
          <th>名称</th>
          <th>负责人</th>
        </thead>
        <tbody>
          {list?.map((_project) => {
            return (
              <tr>
                <td>{_project.name}</td>
                <td>
                  {users?.find((user) => user?.id === _project.personId)?.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
