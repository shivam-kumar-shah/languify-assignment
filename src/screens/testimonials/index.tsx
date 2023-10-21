import React from "react";
import Paper from "../../components/ui/surface/Paper";
import Heading from "../../components/ui/typography/Heading";
import Card from "../../components/ui/surface/Card";
import { BsLinkedin } from "react-icons/bs";
import SubHeading from "../../components/ui/typography/SubHeading";
import Body from "../../components/ui/typography/Body";
import Link from "../../components/ui/navigation/Link";
import TestimonialCard from "./TestimonialCard";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <Paper className="max-w-5xl mx-auto w-full bg-background__card__secondary rounded-lg my-16 gap-y-12 flex flex-col p-16">
      <Heading className="flex flex-col text-5xl font-bold text-font__secondary">
        <span>don’t just take our</span>
        <span>word for it...</span>
      </Heading>
      <div className="testimonials flex flex-row gap-x-8">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </Paper>
  );
};

export default Testimonials;
