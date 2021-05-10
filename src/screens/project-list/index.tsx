import React, { useEffect, useState } from "react";
import { SearchPanel, User } from "./search-panel";
import { List } from "./list";
import { cleanObject, useDebounce, useDocumentTitle, useMount } from "utils";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProject } from "utils/use-project";
import { useUrlQueryParam } from "utils/url";

export const ProjectListScreen = () => {

  const [keys] = useState<('name'| 'personId')[]>(['name', 'personId']);
  const [param, setParam] = useUrlQueryParam(keys)
  console.log("param::", param)
  const [users, setUsers] = useState([]);
  const client = useHttp();
  useDocumentTitle("Project List", false);
  const debouncedParam = useDebounce(param, 200);
  const { isLoading, isError, error, data: list } = useProject(debouncedParam);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users} />
      {isError ? <Typography.Text>{error}</Typography.Text> : null}
      <List dataSource={list || undefined} users={users} loading={isLoading} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
