import React, { FormEvent } from "react";
import { useAuth } from "@src/context/auth-context";
import { Button, Form, Input } from "antd";

export const Login = () => {
  const { user, login } = useAuth();
  const handleSubmit = (values: { name: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item>
        <Input placeholder="用户名" id={"name"} />
      </Form.Item>
      <Form.Item>
        <Input placeholder="密码" id={"password"} />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        登陆
      </Button>
    </Form>
  );
};
