import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Body from "../../components/ui/typography/Body";

type Props = {};

const FAQTile = (props: Props) => {
  return (
    <div className="tile flex flex-row items-center gap-x-6 border-b border-border__color py-6">
      <BsFillArrowRightCircleFill className="text-4xl text-theme__primary" />
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit
        adieli.
      </Body>
    </div>
  );
};

export default FAQTile;
