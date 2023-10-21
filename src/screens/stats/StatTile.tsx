import React from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import Paper from "../../components/ui/surface/Paper";
import Heading from "../../components/ui/typography/Heading";
import SubHeading from "../../components/ui/typography/SubHeading";

type Props = { className?: string; title: string; subtitle: string };

const StatTile = ({ title, subtitle, className }: Props) => {
  return (
    <Paper className="flex h-fit flex-col gap-y-4 bg-background__card__tertiary px-8 py-8">
      <BsCheckSquareFill className="text-2xl text-theme__primary" />
      <Heading className="text-4xl font-bold text-font__secondary">
        {title}
      </Heading>
      <SubHeading className="text-base text-font__secondary">
        {subtitle}
      </SubHeading>
    </Paper>
  );
};

export default StatTile;
