import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section className="w-screen h-screen flex flex-col">
      <Nav />
      <Hero />
    </section>
  );
};

export default Landing;
