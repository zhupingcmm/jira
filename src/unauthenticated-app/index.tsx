import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";

export const UnAuthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div>
      {isRegister ? <Register /> : <Login />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? "登陆" : "注册"}
      </button>
    </div>
  );
};
