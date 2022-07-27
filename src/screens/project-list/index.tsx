import React, { useMemo } from "react";
import { List } from "@src/screens/project-list/list";
import { SearchPanel } from "./search-panel";
import { useProjects, useUsers, useProjectSearchParams } from "./hook.util";
import { useDocumentTitle } from "@src/util";
import { ProjectModel } from "./project-model";

export interface Param {
  name: string;
  personId: string;
}
export const ProjectList = () => {
  useDocumentTitle("项目管理", false);
  const [searchParam, setParam] = useProjectSearchParams();
  const { data: list } = useProjects(searchParam);
  const users = useUsers();
  return (
    <div className="project_list">
      <SearchPanel param={searchParam} setParam={setParam} />
      <List users={users || []} dataSource={list || []} />
      <ProjectModel />
    </div>
  );
};
