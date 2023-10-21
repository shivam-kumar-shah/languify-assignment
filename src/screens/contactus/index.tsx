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
    <div className="bg-background__card__secondary w-full">
      <div className="content max-w-6xl py-16 px-8 flex flex-row mx-auto gap-x-16">
        <About />
        <ContactForm />
        <Misc />
      </div>
    </div>
  );
};

export default ContactUs;
