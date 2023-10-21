import React from "react";
import Heading from "../../components/ui/typography/Heading";
import Body from "../../components/ui/typography/Body";
import { BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="about text-font__secondary flex flex-col gap-y-4 w-full">
      <Heading className="text-2xl font-bold">About Interview</Heading>
      <Body className="text-font__card text-base">
        A fresh and an upcoming service provider, we write, design, develop
        content and consult to cater to unconventional and unorthodox
        requirements of companies, startups, and professionals. Just tell us
        what your problem is, and we’ll put in our best to ensure that you’re
        happy.
      </Body>
      <div className="socials text-theme__primary text-2xl flex flex-row gap-x-4">
        <BsLinkedin />
        <BsInstagram />
        <BsFacebook />
      </div>
    </div>
  );
};

export default About;
