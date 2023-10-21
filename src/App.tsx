import React from "react";
import Nav from "./components/layout/navbar/Nav";
import Hero from "./components/Hero";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="w-screen h-screen">
      <Nav />
      <Hero />
    </div>
  );
};

export default App;
