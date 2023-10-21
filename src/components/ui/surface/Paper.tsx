import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = { className?: string };

const Paper = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={twMerge(`rounded-md px-8 py-4 sm:rounded-xl`, className)}>
      {children}
    </div>
  );
};

export default Paper;
