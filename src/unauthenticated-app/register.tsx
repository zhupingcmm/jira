import { User } from "@src/types";
import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;
export interface AuthForm {}

export const Register = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    register({ name, password });
  };

  const register = ({ name, password }: Pick<User, "name" | "password">) => {
    fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        console.log("data::", data);
      } else {
        Promise.reject(data);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>用户名</label>
        <input type={"text"} id={"username"} />
      </div>
      <div>
        <label>用户名</label>
        <input type={"text"} id={"password"} />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};
