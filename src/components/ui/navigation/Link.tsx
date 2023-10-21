import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

const Link = ({ children, to, className }: Props) => {
  return (
    <a href={to ?? ""} className={`font-Inter no-underline ${className}`}>
      {children}
    </a>
  );
};

export default Link;
