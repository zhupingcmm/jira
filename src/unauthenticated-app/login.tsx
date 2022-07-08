import React from "react";
import { useAuth } from "@src/context/auth-context";
import { Button, Form, Input } from "antd";

export const Login = () => {
  const { user, login } = useAuth();
  const handleSubmit = (values: { name: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"name"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" id={"name"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" id={"password"} type="password" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary" style={{ width: "100%" }}>
          登陆
        </Button>
      </Form.Item>
    </Form>
  );
};
