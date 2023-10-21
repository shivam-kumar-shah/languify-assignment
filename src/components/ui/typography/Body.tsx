import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Body = ({ children, className }: PropsWithChildren<Props>) => {
  return <p className={`${className}`}>{children}</p>;
};

export default Body;
