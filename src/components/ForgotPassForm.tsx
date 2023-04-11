import React, { useState } from "react";
import Button from "../components/Button";

const ForgotPassForm = () => {
  const [email, setEmail] = useState("");

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = () => {
    // add your forgot password logic here
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleResetPassword} className="px-auto">
        <div className="mb-4">
          <label
            className="block color-dark-grey font-mulish tracking-wide font-bold antialiased text-opacity-90 mb-2 pl-1"
            htmlFor="email"
          ></label>
          <input
            className="appearance-none border border-danger rounded-full w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailInput}
          ></input>
          <Button
            id="longTextButton"
            className="bg-orange hover:bg-grey  rounded-full w-44 h-10 items-center mb-4 "
            text="RESET PASSWORD"
            linkTo="/Login"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ForgotPassForm;
