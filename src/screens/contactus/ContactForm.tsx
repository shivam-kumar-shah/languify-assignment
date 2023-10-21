import React from "react";
import Heading from "../../components/ui/typography/Heading";
import Body from "../../components/ui/typography/Body";
import { MdEmail, MdPhone } from "react-icons/md";
import Button from "../../components/ui/input/Button";
import SubHeading from "../../components/ui/typography/SubHeading";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className="contact-form flex w-full flex-col gap-y-4 border-b py-8 text-font__secondary sm:border-b-0 sm:py-0">
      <div className="flex w-full flex-col gap-y-2">
        <Heading className="text-2xl font-bold">Contact Us</Heading>
        <Body className="flex flex-col gap-y-2 text-base text-font__card">
          <p className="flex items-center gap-x-2">
            <MdEmail className="text-2xl text-theme__primary" />
            <span>:contact@dfgadjsy.in</span>
          </p>
          <p className="flex items-center gap-x-2">
            <MdPhone className="text-2xl text-theme__primary" />
            <span>:+91 999999999</span>
          </p>
        </Body>
      </div>
      <div className="flex w-full flex-col gap-y-2">
        <Heading className="text-2xl font-bold">
          Subscribe to get updates
        </Heading>
        <input
          type="text"
          className="rounded-md px-4 py-2 text-border__color"
          placeholder="E-mail Address"
        />
        <Button className="self-start bg-background__card__tertiary text-sm font-bold uppercase">
          Sign Up
        </Button>
        <SubHeading className="text-sm font-bold">
          We promise we won't spam you.
        </SubHeading>
      </div>
    </div>
  );
};

export default ContactForm;
