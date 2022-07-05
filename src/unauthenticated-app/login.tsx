import { User } from "@src/types";
import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export const Login = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ name, password });
  };

  const login = ({ name, password }: Pick<User, "name" | "password">) => {
    fetch(`${apiUrl}/login`, {
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
      <button type="submit">登陆</button>
    </form>
  );
};
