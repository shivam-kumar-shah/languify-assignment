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
    <Card className="testimonial__drop-shadow flex w-full flex-col gap-y-4 bg-background__card__tertiary p-8">
      <div className="info flex h-16 flex-row items-center text-lg">
        <div className="pic aspect-square h-full rounded-full bg-theme__primary"></div>
        <div className="title ml-8 mr-auto">
          <Heading className="whitespace-nowrap text-font__secondary">
            Lokap Sahu
          </Heading>
          <SubHeading className="whitespace-nowrap text-sm text-theme__primary">
            CEO at Interview
          </SubHeading>
        </div>
        <BsLinkedin className="hidden text-3xl text-theme__primary sm:block" />
      </div>
      <div className="description flex flex-col gap-y-2 text-sm">
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
