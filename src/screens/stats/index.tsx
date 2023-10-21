import React from "react";
import Card from "../../components/ui/surface/Card";
import SubHeading from "../../components/ui/typography/SubHeading";
import { StatCard } from "./StatCard";
import FeatureGrid from "./FeatureGrid";
import StatsGrid from "./StatsGrid";

type Props = {};

const Stats = (props: Props) => {
  return (
    <section className="h-screen w-screen bg-background px-16 flex flex-col">
      <FeatureGrid />
      <StatsGrid />
    </section>
  );
};

export default Stats;
