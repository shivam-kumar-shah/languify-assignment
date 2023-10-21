import React from "react";
import Heading from "../../components/ui/typography/Heading";
import Body from "../../components/ui/typography/Body";
import Button from "../../components/ui/input/Button";

type Props = {};

const Misc = (props: Props) => {
  return (
    <div className="w-full text-font__secondary font-bold gap-y-4 flex flex-col border-b sm:border-b-0 py-8 sm:py-0">
      <Heading>About Chrome extension</Heading>
      <Heading>About Inprep</Heading>
      <Heading>Target Audience</Heading>
      <Heading>FAQ’s</Heading>
      <Heading>Careers</Heading>
      <Body className="font-normal">
        A fresh and an upcoming service provider, we write, design, develop
        content and consult to cater to unconventional .
      </Body>
      <Button className="bg-background__card__tertiary text-sm self-start">
        I’m Interested
      </Button>
    </div>
  );
};

export default Misc;
