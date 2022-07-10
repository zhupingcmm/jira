import React, { useState } from "react";
import { List } from "@src/screens/project-list/list";
import { SearchPanel } from "./search-panel";
import { Project } from "@src/types";
import { useProject, useUser } from "./hook.util";
import { useDocumentTitle } from "@src/util";
import { useUrlParam } from "@src/util/url";

export interface Param {
  name: string;
  personId: string;
}
export const ProjectList = () => {
  useDocumentTitle("项目管理", false);
  const [param, setParam] = useUrlParam(["name", "personId"]);
  const { list, isLoading } = useProject(param);
  const users = useUser();
  return (
    <div className="project_list">
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      <List users={users || []} dataSource={list || []} loading={isLoading} />
    </div>
  );
};
