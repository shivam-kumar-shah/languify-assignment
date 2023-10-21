import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Body from "../../components/ui/typography/Body";

type Props = {};

const FAQTile = (props: Props) => {
  return (
    <div className="tile flex flex-row items-center gap-x-6 border-b py-6 border-border__color">
      <BsFillArrowRightCircleFill className="text-theme__primary text-4xl" />
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit
        adieli.
      </Body>
    </div>
  );
};

export default FAQTile;
