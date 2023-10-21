import Button from "../../components/ui/input/Button";
import Body from "../../components/ui/typography/Body";
import Heading from "../../components/ui/typography/Heading";

type Props = {};

const Misc = (props: Props) => {
  return (
    <div className="flex w-full flex-col gap-y-4 border-b py-8 font-bold text-font__secondary sm:border-b-0 sm:py-0">
      <Heading>About Chrome extension</Heading>
      <Heading>About Inprep</Heading>
      <Heading>Target Audience</Heading>
      <Heading>FAQ’s</Heading>
      <Heading>Careers</Heading>
      <Body className="font-normal">
        A fresh and an upcoming service provider, we write, design, develop
        content and consult to cater to unconventional .
      </Body>
      <Button className="self-start bg-background__card__tertiary text-sm">
        I’m Interested
      </Button>
    </div>
  );
};

export default Misc;
