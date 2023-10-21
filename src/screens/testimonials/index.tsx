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
    <section className="max-w-5xl mx-auto my-16 px-4 sm:p-0">
      <Paper className="w-full bg-background__card__secondary rounded-lg gap-y-12 flex flex-col sm:p-16 p-8 overflow-hidden">
        <Heading className="flex flex-col sm:text-5xl text-3xl font-bold text-font__secondary">
          <span>don’t just take our</span>
          <span>word for it...</span>
        </Heading>
        <div className="testimonials flex flex-row gap-x-8 overflow-x-auto">
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </Paper>
    </section>
  );
};

export default Testimonials;
