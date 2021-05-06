import React from "react";
import { useAuth } from "screens/context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import { Dropdown, Menu } from "antd";
import styled from "@emotion/styled";
import { Row } from "componnets/lib";
import {ReactComponent as SoftWareLogo} from "assets/software-logo.svg"
export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftWareLogo width={'18rem'} color={'rgb(38, 132, 255)'}/>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={<Menu>
            <Menu.Item key={'logout'}>
              <a onClick={logout}>logout</a>
            </Menu.Item>
          </Menu>}>
            <a onClick={(e)=> e.preventDefault()}> hi {user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
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

const HeaderLeft = styled(Row)`
`;

const HeaderRight = styled.div`

`;

const Main = styled.main`
  grid-area: main
`;
