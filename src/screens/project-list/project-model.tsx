import React, { useCallback, useEffect } from "react";
import { projectListSlice, projectState } from "@src/slice/project-list-slice";
import { Button, Drawer, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddProject,
  useEditProject,
  useProjectModal,
  useProjectQueryKey,
} from "./hook.util";
import { UserSelect } from "@src/components/use-select";
import { useForm } from "antd/lib/form/Form";
export const ProjectModel = () => {
  const state = useSelector(projectState);
  const dispatch = useDispatch();
  const { cleanProjectId, projectData } = useProjectModal();
  const [form] = useForm();
  const mutateProject = projectData ? useEditProject : useAddProject;
  const { mutateAsync } = mutateProject(useProjectQueryKey());

  const close = useCallback(() => {
    if (state.status === "edit") {
      cleanProjectId();
    }
    form.resetFields();
    dispatch(projectListSlice.actions.closeProjectModal());
  }, [state]);

  const onFinish = useCallback(
    (values: any) => {
      mutateAsync({ ...projectData, ...values }).then(() => form.resetFields());
      close();
    },
    [mutateAsync, form, close, projectData]
  );

  const title = state.status === "edit" ? "修改项目" : "新建项目";

  useEffect(() => {
    form.setFieldsValue(projectData);
  }, [projectData, form]);

  return (
    <Drawer
      forceRender={true}
      visible={state.projectModelOpen}
      width={"100%"}
      onClose={close}
      className="project_model"
    >
      <h2>{title}</h2>
      <Form form={form} onFinish={onFinish} className="project_model_form">
        <Form.Item
          label={"名称"}
          name={"name"}
          rules={[{ required: true, message: "请输入名称" }]}
        >
          <Input placeholder="请输入名称" />
        </Form.Item>
        <Form.Item
          label={"部门"}
          name={"organization"}
          rules={[{ required: true, message: "请输入用组织" }]}
        >
          <Input placeholder="请输入用组织" />
        </Form.Item>
        <Form.Item label={"负责人"} name={"personId"}>
          <UserSelect />
        </Form.Item>
        <Form.Item style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};
