import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ children, className, onClick }: PropsWithChildren<Props>) => {
  return (
    <button
      className={`rounded-xl px-8 py-4 text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
