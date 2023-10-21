import React from "react";
import Heading from "../../components/ui/typography/Heading";
import Body from "../../components/ui/typography/Body";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import About from "./About";
import ContactForm from "./ContactForm";
import Misc from "./Misc";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="w-full overflow-hidden bg-background__card__secondary">
      <div className="content mx-auto flex max-w-6xl flex-col gap-x-16 px-8 py-16 sm:flex-row">
        <About />
        <ContactForm />
        <Misc />
      </div>
    </div>
  );
};

export default ContactUs;
