import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const Card = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={twMerge(
        `card__drop-shadow h-fit w-fit rounded-md px-8 py-4 sm:rounded-xl`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
