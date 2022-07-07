import React, { useEffect, useState } from "react";
import { List } from "@src/components/screens/project-list/list";
import { SearchPanel } from "./search-panel";
import { Project, User } from "@src/types";
import * as qs from "qs";
import { cleanObject, useDebounce } from "@src/util";

const apiUrl = process.env.REACT_APP_API_URL;
export interface Param {
  name: string;
  personId: string;
}
export const ProjectList = () => {
  const [list, setList] = useState<Project[]>();
  const [users, setUsers] = useState<User[]>();
  const [param, setParam] = useState<
    Partial<Pick<Project, "name" | "personId">>
  >({
    name: "",
    personId: 0,
  });
  const debounceValue = useDebounce(param, 500);
  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debounceValue))}`
    ).then(async (res) => {
      const { data } = await res.json();
      if (res.ok) {
        setList(data);
      } else {
        return Promise.reject(data);
      }
    });
  }, [debounceValue]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      const { data } = await res.json();
      if (res.ok) {
        setUsers(data);
      } else {
        return Promise.reject(data);
      }
    });
  }, []);
  return (
    <div>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      <List users={users || []} list={list || []} />
    </div>
  );
};
