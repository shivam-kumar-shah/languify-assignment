import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section className="-z-50 flex h-screen w-screen flex-col">
      <Nav />
      <Hero />
    </section>
  );
};

export default Landing;
