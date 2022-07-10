import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Epic } from "@src/screens/project/epic";
import { Kanban } from "./kanban";

export const ProjectScreen = () => {
  return (
    <div>
      ProjectScreen
      <Link to="kanban">看板</Link>
      <Link to="epic">epic</Link>
      <Routes>
        <Route path="kanban" element={<Kanban />} />
        <Route path="epic" element={<Epic />} />
        <Route
          path="/*"
          element={
            <Navigate
              to={window.location.pathname + "/kanban"}
              replace={true}
            />
          }
        />
      </Routes>
    </div>
  );
};
