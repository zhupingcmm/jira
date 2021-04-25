import { Form, Input, Button } from "antd";
import React, { FormEvent, FormEventHandler } from "react";
import { useAuth } from "screens/context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen = () => {
  const { login } = useAuth();
  const hanldeSubmit = (values: { username: string; password: string }) => {
    login(values);
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
        <Button htmlType="submit" type="primary">
          login
        </Button>
      </Form.Item>
    </Form>
  );
};
