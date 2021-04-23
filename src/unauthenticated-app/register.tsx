import React, { FormEvent, FormEventHandler } from "react";
import { useAuth } from "screens/context/auth-context";

const apiUrl = process.env.REACT_APP_API_URL;
export const RegisterScreen = () => {
  const {user, register } = useAuth();
  const hanldeSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLFormElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLFormElement).value;
    register({ username, password });
  };

  return (
    <form onSubmit={hanldeSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>register</button>
    </form>
  );
};
