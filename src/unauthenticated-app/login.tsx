import { useAuth } from "@src/context/auth-context";
import React, { FormEvent } from "react";

export const Login = () => {
  const { user, login } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ name, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <span>用户名: {user?.name}</span>
      <div>
        <label>用户名</label>
        <input type={"text"} id={"username"} />
      </div>
      <div>
        <label>用户名</label>
        <input type={"text"} id={"password"} />
      </div>
      <button type="submit">登陆</button>
    </form>
  );
};
