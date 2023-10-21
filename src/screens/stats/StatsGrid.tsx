import React from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import Paper from "../../components/ui/surface/Paper";
import Heading from "../../components/ui/typography/Heading";
import SubHeading from "../../components/ui/typography/SubHeading";
import StatTile from "./StatTile";

type Props = {};

const StatsGrid = (props: Props) => {
  return (
    <Paper className="bg-background__card__secondary h-full w-fit aspect-video rounded-lg mx-auto flex flex-row items-center justify-between px-12">
      <Heading className="flex flex-col text-4xl text-font__secondary pl-12">
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
