import React from "react";
interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      className={className}
      id=""
      src="./petmate-logo-01.svg"
      alt="petmate logo"
    ></img>
  );
};

export default Logo;
