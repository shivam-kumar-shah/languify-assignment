import React from "react";
import { BsLinkedin } from "react-icons/bs";
import Link from "../../components/ui/navigation/Link";
import Card from "../../components/ui/surface/Card";
import Body from "../../components/ui/typography/Body";
import Heading from "../../components/ui/typography/Heading";
import SubHeading from "../../components/ui/typography/SubHeading";

type Props = {};

const TestimonialCard = (props: Props) => {
  return (
    <Card className="testimonial__drop-shadow bg-background__card__tertiary flex flex-col w-full gap-y-4 p-8">
      <div className="info flex flex-row text-lg items-center h-16">
        <div className="pic bg-theme__primary h-full aspect-square rounded-full"></div>
        <div className="title ml-8 mr-auto">
          <Heading className="text-font__secondary whitespace-nowrap">
            Lokap Sahu
          </Heading>
          <SubHeading className="text-theme__primary text-sm whitespace-nowrap">
            CEO at Interview
          </SubHeading>
        </div>
        <BsLinkedin className="text-theme__primary text-3xl hidden sm:block" />
      </div>
      <div className="description text-sm flex flex-col gap-y-2">
        <Body className="text-font__card">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, id
          pellentesque impdiet suspe. liquam, id tesque imperdiet suspendisse “
        </Body>
        <Link className="text-theme__primary">Read more</Link>
      </div>
    </Card>
  );
};

export default TestimonialCard;
