import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ children, className, onClick }: PropsWithChildren<Props>) => {
  return (
    <button
      className={`text-white px-8 py-4 rounded-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
