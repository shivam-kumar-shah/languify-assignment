import React from "react";
import Heading from "../../components/ui/typography/Heading";
import SubHeading from "../../components/ui/typography/SubHeading";
import Button from "../../components/ui/input/Button";
import Link from "../../components/ui/navigation/Link";

type Props = {};

const Hero = ({}: Props) => {
  return (
    <main className="-z-50 flex h-full w-full flex-col justify-between bg-background__card__secondary px-4 sm:p-0">
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
        <h1 className="flex flex-col items-center justify-center text-center text-4xl font-[800] text-font__secondary sm:text-6xl">
          <span>an AI that can</span> <span>improve your communication</span>
        </h1>
        <SubHeading className="text-font__secondary">
          Interview aims on helps on helps you improve your English in real-time
        </SubHeading>
        <div className="call-to-action flex flex-col items-center gap-x-4 gap-y-8 sm:flex-row">
          <Button className="bg-theme__primary font-bold">
            Try Interview’s In-prep NOW!
          </Button>
          <Link className="font-bold text-theme__primary">
            Talk to out team
          </Link>
        </div>
      </div>
      <div className="vector-art relative h-16 overflow-clip sm:h-64">
        <img
          src="vector/back.png"
          alt="background--vector"
          className="absolute bottom-0 w-full sm:top-0"
        />
        <img
          src="vector/front.png"
          alt="foreground--vector"
          className="absolute bottom-0 w-full sm:top-0"
        />
      </div>
    </main>
  );
};

export default Hero;
