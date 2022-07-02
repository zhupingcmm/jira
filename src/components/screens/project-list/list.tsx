import { Project, User } from "@src/types";
import React, { useEffect, useState } from "react";

interface ListProps {
  users: User[];
  list: Project[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <div>
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
