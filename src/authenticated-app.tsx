import React from "react";
import { ProjectList } from "@src/screens/project-list";
import { Button, Dropdown, Menu, Typography } from "antd";
import { useAuth } from "./context/auth-context";
import softwareLogo from "@src/assets/software-logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import { ProjectScreen } from "./screens/project";
import { resetRoute } from "./util";
import { useDispatch } from "react-redux";
import { projectListActions } from "./slice/project-list-slice";

export default function AuthenticatedApp() {
  return (
    <div className="authenticated_app">
      <PageHeader />
      <Router>
        <Routes>
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
          <Route
            path="*"
            element={<Navigate to="/projects" replace={true} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export const PageHeader = () => {
  const { user, logout } = useAuth();
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header_left">
        <img
          onClick={resetRoute}
          src={softwareLogo}
          alt="softwareLogo"
          className="software_logo"
        />

        <Typography.Text style={{ padding: "2rem" }}>收藏项目</Typography.Text>
        <Button
          onClick={() => {
            dispatch(projectListActions.openProjectModal());
          }}
        >
          创建项目
        </Button>
      </div>
      <div className="header_right">
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"logout"}>
                <Button onClick={logout}>登出</Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="link" onClick={(e) => e.preventDefault()}>
            Hi, {user?.name}
          </Button>
        </Dropdown>
      </div>
    </header>
  );
};
