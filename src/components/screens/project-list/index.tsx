import React from "react";
import { List } from "@src/components/screens/project-list/list";
import { SearchPanel } from "./search-panel";
export const ProjectList = () => {
  return (
    <div>
      <List />
      <SearchPanel />
    </div>
  );
};
