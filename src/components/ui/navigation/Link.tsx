import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  to?: string;
};

const Link = ({ children, to, className }: Props) => {
  return (
    <a href={to} className={`no-underline ${className} cursor-pointer`}>
      {children}
    </a>
  );
};

export default Link;
