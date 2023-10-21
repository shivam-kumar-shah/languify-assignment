import Hero from "./Hero";
import Nav from "./Nav";

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
