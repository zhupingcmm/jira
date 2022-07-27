import { Project } from "@src/types";
import { Dropdown, Menu, Button } from "antd";
import React, { useCallback } from "react";
import { useProjectQueryKey } from "@src/screens/project-list/hook.util";
import { useDispatch, useSelector } from "react-redux";
import { projectListSlice, projectState } from "@src/slice/project-list-slice";

export const More = ({ project }: { project: Project }) => {
  const { startEdit } = useProjectQueryKey();
  const dispatch = useDispatch();

  const handleEdit = useCallback(() => {
    dispatch(projectListSlice.actions.openProjectModal({ status: "edit" }));
    startEdit(project.id);
  }, []);

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={handleEdit} key="edit">
            编辑
          </Menu.Item>
        </Menu>
      }
    >
      <Button type="link">...</Button>
    </Dropdown>
  );
};
