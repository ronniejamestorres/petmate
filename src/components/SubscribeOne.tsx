import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import axios from "axios";

const SubscribeOne = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorString, setErrorString] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const NavigateTo = useNavigate();

  const axiosInstance = axios.create({
    baseURL: "http://wave.nodestarter.eu:4000",
    timeout: 5000,
    headers: { "X-Custom-Header": "value" },
  });

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubscribeOne = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || username === "" || password === "") {
      setErrorString("Please fill in all the fields");
      return;
    } else {
      axiosInstance
        .post("/user/register", {
          email: email,
          username: username,
          password: password,
        })
        .then((response) => {
          console.log(response);
          NavigateTo("/");
        })
        .catch((error) => {
          console.log(error.message);
          setErrorString(
            "Something went wrong, please try again: " + error.message
          );
        });
    }
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
    const errorMsg = document.getElementById("needAccept");
    if (errorMsg) {
      errorMsg.style.display = !isChecked ? "none" : "block";
    }
  };

  return (
    <div className="bg-white rounded-3xl p-4 flex flex-col items-center justify-center">
      <form onSubmit={handleSubscribeOne} className="px-auto">
        <div className="m-4">
          <div className="flex font-bold mb-4 items-center justify-center text-xl ">
            REGISTER
          </div>
          <label
            className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1"
            htmlFor="email"
          ></label>
          <input
            className="appearance-none border border-danger rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailInput}
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1"
            htmlFor="username"
          ></label>
          <input
            className="appearance-none border border-danger rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder="Choose a username"
            value={username}
            onChange={handleUserInput}
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1"
            htmlFor="password"
          ></label>
          <input
            className="appearance-none border border-danger rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Choose a password"
            value={password}
            onChange={handlePasswordInput}
          ></input>
        </div>
      </form>
      <div className="flex items-center justify-items-center font-raleway font-lighter text-base leading-relaxed my-1">
        <input
          type="checkbox"
          id="acceptTerms"
          checked={isChecked}
          onChange={handleCheck}
          className="mr-2"
        />
        <label htmlFor="acceptTerms" className="text-dark-grey text-sm">
          I accept the{" "}
          <a href="/SubscribeTerms" style={{ textDecoration: "underline" }}>
            terms and conditions
          </a>
        </label>
      </div>
      <div className="flex flex-col pt-4 pb-4">
        <Button
          onClick={handleSubscribeOne}
          id=""
          className="bg-purewhite hover:bg-grey  rounded-full w-44 h-10 items-center "
          text="NEXT"
          type="submit"
          disabled={!isChecked}
        />
      </div>
      <div>
        <p className="text-center text-orange font-bold text-sm font-raleway mx-4">
          {errorString}
        </p>
        <p
          id="needAccept"
          className="text-center text-orange font-bold text-sm font-raleway mx-4"
        >
          Please accept the terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default SubscribeOne;
