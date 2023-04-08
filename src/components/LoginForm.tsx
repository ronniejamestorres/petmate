import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorString, setErrorString] = useState("");

  const Navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: "http://wave.nodestarter.eu:4000",
    timeout: 5000,
    headers: { "X-Custom-Header": "value" },
  });

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setErrorString("Please enter username and password");
      return;
    } else {
      axiosInstance
        .post("/users/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          //login successful
          localStorage.setItem("userId", response.data._id);
          localStorage.setItem("x-auth-token", response.data.token);
          localStorage.setItem("username", username);
          console.log(localStorage.getItem("x-auth-token"));
          setErrorString("Success");
          Navigate("/ShowAll");
        })
        .catch((error) => {
          //login failed
          localStorage.setItem("x-auth-token", error.response.data.message);
          console.log(error.response.data.message);
          setErrorString(error.response.data.message);
        });
    }
  };

  const handleForgetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    Navigate("/ForgotPassword");
  };

  return (
    <div className="bg-beige3 rounded-3xl p-4 flex flex-col items-center justify-center">
      <form onSubmit={handleLogin} className="px-auto">
        <div className="mb-4">
          <div className="flex font-bold mb-4 items-center justify-center text-xl ">
            LOGIN
          </div>
          <input
            className=" border  rounded-full w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder="Username"
            value={username}
            onChange={handleUserInput}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block  color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1"
            htmlFor="password"
          ></label>
          <input
            className="border  rounded-full w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordInput}
          ></input>
        </div>
      </form>
      <div className="flex flex-col">
        <Button
          id=""
          className="bg-white hover:bg-grey rounded-full w-44 h-10 items-center mb-4  "
          text="LOGIN"
          onClick={handleLogin}
          type="submit"
        />
        <Button
          id=""
          className="bg-beige1 hover:bg-grey  rounded-full w-44 h-10 items-center   "
          text="FORGOT PASSWORD"
          onClick={handleForgetPassword}
          type="submit"
        />
      </div>
      <div>
        <p className="text-center text-dark-grey text-sm font-raleway mx-4">
          {errorString}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
