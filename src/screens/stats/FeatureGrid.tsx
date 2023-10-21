import React from "react";
import { StatCard } from "./StatCard";

type Props = {};

const FeatureGrid = (props: Props) => {
  return (
    <div className="feature__grid flex flex-row sm:flex-col items-center gap-y-8 z-50 w-full gap-x-4 -translate-y-16 sm:translate-y-0">
      <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 sm:-translate-y-1/2  sm:translate-x-4 w-full sm:w-auto">
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
      <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4 sm:-translate-y-1/2 sm:-translate-x-2 w-full  sm:w-auto">
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
