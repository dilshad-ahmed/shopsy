import React from "react";

import { twMerge } from "tailwind-merge";

const Button = ({
  text,
  rounded = false,
  gradient = false,
  onClick,
  className,
}) => {
  return (
    <button
      className={twMerge(
        " text-white py-2 px-4",
        rounded ? "rounded-full" : "rounded-md",
        gradient ? "bg-gradient-to-r from-primary to-secondary" : "bg-primary",
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
