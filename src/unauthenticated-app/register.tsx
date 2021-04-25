import React from "react";
import { Form, Input, Button } from "antd";

import { useAuth } from "screens/context/auth-context";

export const RegisterScreen = () => {
  const { register } = useAuth();
  const hanldeSubmit = (values:{username:string, password: string}) => {
    register(values);
  };

  return (
    <Form onFinish={hanldeSubmit}>
      <Form.Item name={'username'} rules={[{required: true, message: "Please input username"}]}>
        <Input placeholder={"username"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item name={'password'} rules={[{required: true, message: "Please input password"}]}>
        <Input placeholder={"password"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">register</Button>
      </Form.Item>
    </Form>
  );
};
