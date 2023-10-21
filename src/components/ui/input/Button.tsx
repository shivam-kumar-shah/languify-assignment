import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={` text-white px-6 py-4 rounded-md  font-Inter ${className}`}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </button>
  );
};

export default Button;
