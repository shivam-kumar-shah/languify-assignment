import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Body = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={`break-words text-justify ${className}`}>{children}</p>;
};

export default Body;
