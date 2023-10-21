import React from "react";
import Card from "../../components/ui/surface/Card";
import SubHeading from "../../components/ui/typography/SubHeading";
import { StatCard } from "./StatCard";
import FeatureGrid from "./FeatureGrid";
import StatsGrid from "./StatsGrid";

type Props = {};

const Stats = (props: Props) => {
  return (
    <section className="z-50 flex w-screen flex-col bg-background px-4 sm:h-screen sm:px-16">
      <FeatureGrid />
      <StatsGrid />
    </section>
  );
};

export default Stats;
