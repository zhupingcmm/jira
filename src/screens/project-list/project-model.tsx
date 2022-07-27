import React, { useCallback } from "react";
import { projectListSlice, projectState } from "@src/slice/project-list-slice";
import { Button, Drawer, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useProjectQueryKey } from "./hook.util";
export const ProjectModel = () => {
  const state = useSelector(projectState);
  const dispatch = useDispatch();
  const { cleanProjectId } = useProjectQueryKey();

  const close = useCallback(() => {
    if (state.status === "edit") {
      cleanProjectId();
    }
    dispatch(projectListSlice.actions.closeProjectModal());
  }, [state]);
  return (
    <Drawer
      forceRender={true}
      visible={state.projectModelOpen}
      width={"100%"}
      onClose={close}
    >
      <Form>
        <Form.Item> ssss</Form.Item>
        <Form.Item>
          <Button onClick={close}>关闭</Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
