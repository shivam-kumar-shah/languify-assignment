import React from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import Paper from "../../components/ui/surface/Paper";
import Heading from "../../components/ui/typography/Heading";
import SubHeading from "../../components/ui/typography/SubHeading";
import StatTile from "./StatTile";

type Props = {};

const StatsGrid = (props: Props) => {
  return (
    <Paper className="bg-background__card__secondary sm:h-full sm:w-fit w-full sm:aspect-video rounded-lg mx-auto flex sm:flex-row flex-col items-center justify-between sm:px-12 px-4 py-8 gap-y-8 gap-x-8">
      <Heading className="flex flex-col text-3xl text-font__secondary sm:pl-12 text-center sm:text-left">
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
