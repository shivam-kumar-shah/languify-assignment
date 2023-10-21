import React from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import Paper from "../../components/ui/surface/Paper";
import Heading from "../../components/ui/typography/Heading";
import SubHeading from "../../components/ui/typography/SubHeading";
import StatTile from "./StatTile";

type Props = {};

const StatsGrid = (props: Props) => {
  return (
    <Paper className="mx-auto flex w-full flex-col items-center justify-between gap-x-8 gap-y-8 rounded-lg bg-background__card__secondary px-4 py-8 sm:aspect-video sm:h-full sm:w-fit sm:flex-row sm:px-12">
      <Heading className="flex flex-col text-center text-3xl text-font__secondary sm:pl-12 sm:text-left">
        <span>The Numbers</span>
        <span>speak for</span>
        <span>themselves</span>
      </Heading>
      <div className="stat__tiles h-fit">
        <StatTile subtitle="LOI for users" title="1 Lakh+" />
        <StatTile subtitle="Startup collaborations" title="40+" />
        <StatTile subtitle="MOU’s signed" title="60+" />
        <StatTile subtitle="Pilots deployed" title="5+" />
      </div>
    </Paper>
  );
};

export default StatsGrid;
