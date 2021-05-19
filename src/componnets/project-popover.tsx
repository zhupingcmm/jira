import React from "react";
import { List, Popover, Typography, Divider, Button } from "antd";
import { useProjectUser } from "screens/project-list/util";
import { useProject } from "utils/use-project";
import styled from "@emotion/styled";
import { ButtonNoPadding } from "./lib";
export const ProjectPopover = (props: { openProjectModal: () => void }) => {
  const { data: projects, isLoading } = useProject();
  const pinnedProjects = projects?.filter((project) => project.pin);

  const content = (
    <ContentContainer>
      <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item>
            <List.Item.Meta title={project?.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
      <ButtonNoPadding type={"link"} onClick={props.openProjectModal}>
        创建项目
      </ButtonNoPadding>
    </ContentContainer>
  );
  return (
    <Popover placement={"bottom"} content={content}>
      <span>项目</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
