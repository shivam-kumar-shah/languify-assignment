import React from "react";
import Landing from "./screens/landing";
import Stats from "./screens/stats";
import Solutions from "./screens/solutions";
import Testimonials from "./screens/testimonials";
import FAQs from "./screens/faq";
import ContactUs from "./screens/contactus";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Landing />
      <Stats />
      <Solutions />
      <Testimonials />
      <FAQs />
      <ContactUs />
    </>
  );
};

export default App;
