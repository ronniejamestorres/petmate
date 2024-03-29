import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  id?: string;
  className?: string;
  text: string;
  linkTo?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  id,
  className,
  text,
  linkTo = "/",
  type,
  onClick,
  disabled,
}) => {
  return (
    <Link to={linkTo}>
      <button
        id={id}
        className={`${className}  font-light flex justify-center`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
