import { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Heading = ({ className, children }: PropsWithChildren<Props>) => {
  return <h2 className={`${className}`}>{children}</h2>;
};

export default Heading;
