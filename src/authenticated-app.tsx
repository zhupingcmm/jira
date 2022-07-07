import React from "react";
import { ProjectList } from "@src/components/screens/project-list";
import { Button, Dropdown, Menu } from "antd";
import { useAuth } from "./context/auth-context";

export const AuthenticatedApp = () => {
  const { user, logout } = useAuth();
  return (
    <div className="authenticated_app">
      <header>
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
      </header>
      <ProjectList />
    </div>
  );
};
