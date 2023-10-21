import React from "react";
import Heading from "../../components/ui/typography/Heading";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Body from "../../components/ui/typography/Body";
import FAQTile from "./FAQTile";
import Paper from "../../components/ui/surface/Paper";

type Props = {};

const FAQs = (props: Props) => {
  return (
    <div className="max-w-5xl mx-auto my-16 hidden sm:block">
      <div className="heading flex flex-col items-center gap-y-4">
        <Heading className="text-theme__primary text-3xl">FAQs</Heading>
        <Heading className="text-5xl font-bold">
          incase you missed anything
        </Heading>
      </div>
      <div className="faqs bg-background__secondary pb-16 pt-8 px-32 mt-12">
        <FAQTile />
        <FAQTile />
        <FAQTile />
        <Paper className="bg-theme__primary rounded-sm text-font__secondary">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, id
          pellentesque impdiet suspe. liquam, id tesque imperdiet suspendisse “
        </Paper>
      </div>
    </div>
  );
};

export default FAQs;
