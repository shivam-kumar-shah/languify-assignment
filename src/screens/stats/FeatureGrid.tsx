import React from "react";
import { StatCard } from "./StatCard";

type Props = {};

const FeatureGrid = (props: Props) => {
  return (
    <div className="feature__grid z-50 flex w-full -translate-y-16 flex-row items-center gap-x-4 gap-y-8 sm:translate-y-0 sm:flex-col">
      <div className="flex w-full flex-col gap-x-8 gap-y-4 sm:w-auto  sm:-translate-y-1/2 sm:translate-x-4 sm:flex-row">
        <StatCard src="assets/chat.png" alt="chat-bubble">
          <span>24x7 mock</span>
          <span>interview simulator</span>
        </StatCard>
        <StatCard src="assets/target.png" alt="aim">
          <span>360 Goal</span>
          <span>oriented learning</span>
        </StatCard>
        <StatCard src="assets/graph.png" alt="graph">
          <span>Detailed</span>
          <span>progress tracking</span>
        </StatCard>
      </div>
      <div className="flex w-full flex-col gap-x-8 gap-y-4 sm:w-auto sm:-translate-x-2 sm:-translate-y-1/2  sm:flex-row">
        <StatCard src="assets/todo.png" alt="chat-bubble">
          <span>Choose from</span>
          <span>100+ templates</span>
        </StatCard>
        <StatCard src="assets/console.png" alt="aim">
          <span>Personalised</span>
          <span>games and resources</span>
        </StatCard>
        <StatCard src="assets/clipboard.png" alt="graph">
          <span>Create custom</span>
          <span>interview templates</span>
        </StatCard>
      </div>
    </div>
  );
};

export default FeatureGrid;
