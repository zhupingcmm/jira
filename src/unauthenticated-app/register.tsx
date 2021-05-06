import React from "react";
import { Form, Input } from "antd";

import { useAuth } from "screens/context/auth-context";
import { LongButton } from "unauthenticated-app";

export const RegisterScreen = ({setError}: {setError:(error: Error) => void}) => {
  const { register } = useAuth();
  const hanldeSubmit = async({cpassword ,...values}: { username: string; password: string, cpassword: string }) => {
    if (cpassword !== values.password) {
      setError(new Error("密码输入错误！！！"))
      return;
    }
    try {
      await register(values);
    } catch (e) {
      setError(e);
    }
    
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
      <Form.Item
        name={"cpassword"}
        rules={[{ required: true, message: "Please comfirm password" }]}
      >
        <Input placeholder={"password"} type="password" id={"cpassword"} />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType="submit" type="primary">
          register
        </LongButton>
      </Form.Item>
    </Form>
  );
};
