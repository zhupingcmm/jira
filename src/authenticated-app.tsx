import React from "react";
import { ProjectList } from "@src/components/screens/project-list";
import { Button, Dropdown, Image, Menu, Typography } from "antd";
import { useAuth } from "./context/auth-context";
import softwareLogo from "@src/assets/software-logo.svg";

export default function AuthenticatedApp() {
  const { user, logout } = useAuth();
  return (
    <div className="authenticated_app">
      <header className="header">
        <div className="header_left">
          <img
            src={softwareLogo}
            alt="softwareLogo"
            className="software_logo"
          />
          <Typography.Text style={{ padding: "2rem" }}>
            收藏项目
          </Typography.Text>
          <Typography.Text>创建项目</Typography.Text>
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
      <ProjectList />
    </div>
  );
}
