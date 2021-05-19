import React, { useState } from "react";
import { useAuth } from "screens/context/auth-context";
import { Dropdown, Menu, Button } from "antd";
import styled from "@emotion/styled";
import { ButtonNoPadding, Row } from "componnets/lib";
import { ReactComponent as SoftWareLogo } from "assets/software-logo.svg";
import { RouteReset } from "utils";
import { RootRouter } from "router";
import { ProjectModal } from "screens/project-list/project-modal";
import { ProjectPopover } from "componnets/project-popover";

export const AuthenticatedApp = () => {
  const [projectModelOpen, setProjectModelOpen] = useState(false);
  return (
    <Container>
      <PageHeader
        projectModelOpen={projectModelOpen}
        setProjectModelOpen={setProjectModelOpen}
      />
      <Main>
        <RootRouter
          projectModelOpen={projectModelOpen}
          setProjectModelOpen={setProjectModelOpen}
        />
      </Main>
    </Container>
  );
};

const PageHeader = (props: {
  projectModelOpen: boolean;
  setProjectModelOpen: (arg: boolean) => void;
}) => {
  //const [projectModelOpen, setProjectModelOpen] = useState(false);
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <ButtonNoPadding type="link" onClick={RouteReset}>
          <SoftWareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
        </ButtonNoPadding>
        <ProjectPopover
          openProjectModal={() => props.setProjectModelOpen(true)}
        />
        <span>用户</span>
      </HeaderLeft>
      <ProjectModal
        projectModelOpen={props.projectModelOpen}
        onClose={() => props.setProjectModelOpen(false)}
      />
      <User />
    </Header>
  );
};

const User = () => {
  const { logout, user } = useAuth();
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key={"logout"}>
            <a onClick={logout}>logout</a>
          </Menu.Item>
        </Menu>
      }
    >
      <a onClick={(e) => e.preventDefault()}> hi {user?.name}</a>
    </Dropdown>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-areas:
    "header"
    "main";
  height: 100vh;
`;

const Header = styled(Row)`
  grid-area: header;
  padding: 3.2rem;
`;

const HeaderLeft = styled(Row)``;

const Main = styled.main`
  grid-area: main;
`;
