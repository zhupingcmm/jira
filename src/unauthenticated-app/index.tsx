import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";
import { Button, Card } from "antd";

export const UnAuthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="un_authenticated_app">
      <div className="background" />
      <header className="header" />
      <Card className="shadow_card">
        {isRegister ? <Register /> : <Login />}
        <Button type="link" onClick={() => setIsRegister(!isRegister)}>
          切换到{isRegister ? "已经有账号？直接登陆" : "没有账号？注册新账号"}
        </Button>
      </Card>
    </div>
  );
};
