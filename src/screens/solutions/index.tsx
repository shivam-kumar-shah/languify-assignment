import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

import Heading from "../../components/ui/typography/Heading";
import Card from "../../components/ui/surface/Card";
import SubHeading from "../../components/ui/typography/SubHeading";
import SolutionCard from "./SolutionCard";

type Props = {};

const Solutions = (props: Props) => {
  return (
    <section className="mx-auto flex w-screen max-w-6xl flex-col px-4 pt-20">
      <Heading className="mb-12 flex flex-col text-3xl font-bold sm:text-4xl">
        We understand your challenges &
        <span>
          have
          <span className="text-theme__primary"> solutions just for you!</span>
        </span>
      </Heading>
      <div className="solutions__grid flex h-full w-full flex-col gap-y-12 overflow-hidden">
        <div className="flex h-full w-full flex-col gap-12 overflow-hidden sm:flex-row sm:justify-start">
          <SolutionCard
            src="assets/student.png"
            bullets={[
              "Goal Based Mock Simulation",
              "Games and Resources to upskill",
              "Practice anytime anywhere",
            ]}
            title="For Students"
          />
          <SolutionCard
            src="assets/business.png"
            bullets={[
              "Upskill all students in Interviewing",
              "Save Hassle of Hiring Interviewers",
              "Analyze Students & Mentors Performance",
            ]}
            title="For Businesses"
          />
        </div>
        <div className="flex h-full w-full flex-col gap-12 overflow-hidden sm:flex-row sm:justify-end">
          <SolutionCard
            src="assets/college.png"
            bullets={[
              "Overcome the lack of Mentors",
              "Produce best Communicators",
              "Increase placement results",
            ]}
            title="For Colleges"
          />
          <SolutionCard
            src="assets/instructor.png"
            bullets={[
              "Create Templates for entire cohort",
              "Monitor Progress of individual students",
              "Improve teaching goals as per analytics",
            ]}
            title="For Instructors"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
