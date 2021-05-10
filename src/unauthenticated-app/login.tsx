import { Form, Input,  } from "antd";
import React, { useState } from "react";
import { useAuth } from "screens/context/auth-context";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";

export const LoginScreen = ({setError}: {setError:(error: Error) => void}) => {
  const { login } = useAuth();
  const {run, isLoading, isSuccess} = useAsync();
  
  const hanldeSubmit = async (values: { username: string; password: string }) => {
    try {
      await run(login(values));
      window.location.href ="/project"
    } catch(e) {
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
      <Form.Item>
        <LongButton htmlType="submit" type="primary" loading={isLoading}>
          login
        </LongButton>
      </Form.Item>
    </Form>
  );
};
