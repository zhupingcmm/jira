import React, { useMemo, useState } from "react";
import { List } from "@src/screens/project-list/list";
import { SearchPanel } from "./search-panel";
import { Project } from "@src/types";
import { useProject, useUsers } from "./hook.util";
import { useDocumentTitle } from "@src/util";
import { useUrlParam } from "@src/util/url";

export interface Param {
  name: string;
  personId: string;
}
export const ProjectList = () => {
  useDocumentTitle("项目管理", false);
  const [param, setParam] = useUrlParam(["name", "personId"]);
  const searchParam = useMemo(() => {
    return { ...param, personId: Number(param.personId) || undefined };
  }, [param]);
  const { list, isLoading, retry } = useProject(searchParam);
  const users = useUsers();
  return (
    <div className="project_list">
      <SearchPanel param={searchParam} setParam={setParam} />
      <List
        refresh={retry}
        users={users || []}
        dataSource={list || []}
        loading={isLoading}
      />
    </div>
  );
};
