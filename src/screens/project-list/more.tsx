import { Project } from "@src/types";
import { Dropdown, Menu, Button } from "antd";
import React, { useCallback } from "react";
import {
  useDeleteProject,
  useProjectModal,
  useProjectQueryKey,
} from "@src/screens/project-list/hook.util";
import { useDispatch } from "react-redux";
import { projectListSlice } from "@src/slice/project-list-slice";

export const More = ({ project }: { project: Project }) => {
  const { startEdit } = useProjectModal();
  const dispatch = useDispatch();

  const handleEdit = useCallback(() => {
    dispatch(projectListSlice.actions.openProjectModal({ status: "edit" }));
    startEdit(project.id);
  }, []);

  const { mutate } = useDeleteProject(useProjectQueryKey());
  const handleDelete = useCallback(() => {
    mutate(project.id);
  }, [project]);

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={handleEdit} key="edit">
            编辑
          </Menu.Item>
          <Menu.Item onClick={handleDelete} key="delete">
            删除
          </Menu.Item>
        </Menu>
      }
    >
      <Button type="link">...</Button>
    </Dropdown>
  );
};
