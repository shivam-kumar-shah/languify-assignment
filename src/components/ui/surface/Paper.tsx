import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = { className?: string };

const Paper = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={twMerge(`sm:rounded-xl rounded-md px-8 py-4`, className)}>
      {children}
    </div>
  );
};

export default Paper;
