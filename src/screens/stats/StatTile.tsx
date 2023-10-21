import React from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import Paper from "../../components/ui/surface/Paper";
import Heading from "../../components/ui/typography/Heading";
import SubHeading from "../../components/ui/typography/SubHeading";

type Props = { className?: string; title: string; subtitle: string };

const StatTile = ({ title, subtitle, className }: Props) => {
  return (
    <Paper className="bg-background__card__tertiary h-fit flex flex-col gap-y-4 px-8 py-8">
      <BsCheckSquareFill className="text-theme__primary text-2xl" />
      <Heading className="text-font__secondary text-4xl font-bold">
        {title}
      </Heading>
      <SubHeading className="text-font__secondary text-base">
        {subtitle}
      </SubHeading>
    </Paper>
  );
};

export default StatTile;
