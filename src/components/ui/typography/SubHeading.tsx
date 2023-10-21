import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const SubHeading = ({ children, className }: PropsWithChildren<Props>) => {
  return <h3 className={`text-lg ${className}`}>{children}</h3>;
};

export default SubHeading;
