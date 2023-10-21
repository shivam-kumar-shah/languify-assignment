import { PropsWithChildren } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

type Props = {};

const SolutionTile = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div className="tile flex flex-row items-center gap-x-4 text-sm text-font__tertiary">
      <AiOutlineCheckCircle className="text-xl text-theme__primary" />
      {children}
    </div>
  );
};

export default SolutionTile;
