import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { Epic } from "screens/epic";
import { KanBan } from "screens/kanban";

export const ProjectScreen = () => {
  return (
    <>
      <h1>ProjectScreen</h1>
      <Link to={"kanban"}>kanban</Link>
      <Link to={"epic"}>task</Link>
      <Routes>
        <Route path="/kanban" element={<KanBan />} />
        <Route path="epic" element={<Epic />} />
        <Navigate to={window.location.pathname + "/kanban"} />
      </Routes>
    </>
  );
};
