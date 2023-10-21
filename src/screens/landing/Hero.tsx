import React from "react";
import Heading from "../../components/ui/typography/Heading";
import SubHeading from "../../components/ui/typography/SubHeading";
import Button from "../../components/ui/input/Button";
import Link from "../../components/ui/navigation/Link";

type Props = {};

const Hero = ({}: Props) => {
  return (
    <main className="h-full w-full bg-background__card__secondary flex flex-col justify-between -z-50 px-4 sm:p-0">
      <div className="h-full w-full flex flex-col items-center justify-center gap-y-8 text-center">
        <h1 className="text-font__secondary text-4xl sm:text-6xl font-[800] flex flex-col justify-center items-center text-center">
          <span>an AI that can</span> <span>improve your communication</span>
        </h1>
        <SubHeading className="text-font__secondary">
          Interview aims on helps on helps you improve your English in real-time
        </SubHeading>
        <div className="call-to-action flex flex-col sm:flex-row gap-x-4 gap-y-8 items-center">
          <Button className="bg-theme__primary font-bold">
            Try Interview’s In-prep NOW!
          </Button>
          <Link className="text-theme__primary font-bold">
            Talk to out team
          </Link>
        </div>
      </div>
      <div className="vector-art relative sm:h-64 h-16 overflow-clip">
        <img
          src="vector/back.png"
          alt="background--vector"
          className="w-full absolute bottom-0 sm:top-0"
        />
        <img
          src="vector/front.png"
          alt="foreground--vector"
          className="w-full absolute bottom-0 sm:top-0"
        />
      </div>
    </main>
  );
};

export default Hero;
