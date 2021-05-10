import React from "react";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "screens/project/index";
import { KanBan } from "screens/kanban";
import { Epic } from "screens/epic";
import { ProjectListScreen } from "screens/project-list";

export const RootRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/project"} element={<ProjectListScreen />} />
        <Route path={"/project/:projectId/*"} element={<ProjectScreen />}>
          <Routes>
            <Route path="/kanban" element={<KanBan />} />
            <Route path="epic" element={<Epic />} />
            <Navigate to={window.location.pathname + "/kanban"} />
          </Routes>
        </Route>
        <Navigate to={"/project"} />
      </Routes>
    </Router>
  );
};
