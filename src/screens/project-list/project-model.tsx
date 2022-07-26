import React from "react";
import { projectListSlice, projectState } from "@src/slice/project-list-slice";
import { Drawer, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
export const ProjectModel = () => {
  const projectOpen = useSelector(projectState);
  const dispatch = useDispatch();
  return (
    <Drawer
      forceRender={true}
      visible={projectOpen}
      width={"100%"}
      onClose={() => dispatch(projectListSlice.actions.closeProjectModal())}
    >
      <Form>
        <Form.Item> ssss</Form.Item>
      </Form>
    </Drawer>
  );
};
