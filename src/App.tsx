import ContactUs from "./screens/contactus";
import FAQs from "./screens/faq";
import Landing from "./screens/landing";
import Solutions from "./screens/solutions";
import Stats from "./screens/stats";
import Testimonials from "./screens/testimonials";

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
