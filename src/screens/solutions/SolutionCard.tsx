import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Card from "../../components/ui/surface/Card";
import SubHeading from "../../components/ui/typography/SubHeading";
import SolutionTile from "./SolutionTile";
import Paper from "../../components/ui/surface/Paper";

type Props = {
  src: string;
  title: string;
  bullets: string[];
  alt?: string;
};

const SolutionCard = ({ src, title, bullets, alt }: Props) => {
  return (
    <Paper className="flex aspect-square w-full flex-col overflow-clip bg-background__secondary px-0 py-0 sm:w-2/6">
      <img src={src} alt={alt} className="h-2/5 grow object-cover" />
      <div className="description px-8 py-4">
        <SubHeading className="mb-2 font-semibold text-background__card__secondary">
          {title}
        </SubHeading>
        <div className="card__tile flex flex-col gap-y-2">
          {bullets.map((item) => (
            <SolutionTile>{item}</SolutionTile>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default SolutionCard;
