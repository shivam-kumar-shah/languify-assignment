import React from "react";
import Heading from "../../components/ui/typography/Heading";
import Body from "../../components/ui/typography/Body";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";
import About from "./About";
import ContactForm from "./ContactForm";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className="bg-background__card__secondary w-full">
      <div className="content max-w-5xl p-8 flex flex-row">
        <About />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
