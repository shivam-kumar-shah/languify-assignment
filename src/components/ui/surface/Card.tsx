import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const Card = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={twMerge(
        `rounded-xl card__drop-shadow px-8 py-4 w-fit h-fit`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
