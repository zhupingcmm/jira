import React from "react";
import { Form, Input } from "antd";

import { useAuth } from "screens/context/auth-context";
import { LongButton } from "unauthenticated-app";

export const RegisterScreen = () => {
  const { register } = useAuth();
  const hanldeSubmit = (values: { username: string; password: string }) => {
    register(values);
  };

  return (
    <Form onFinish={hanldeSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "Please input username" }]}
      >
        <Input placeholder={"username"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "Please input password" }]}
      >
        <Input placeholder={"password"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          register
        </LongButton>
      </Form.Item>
    </Form>
  );
};
