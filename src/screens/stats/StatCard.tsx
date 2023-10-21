import React, { PropsWithChildren } from "react";
import Card from "../../components/ui/surface/Card";
import SubHeading from "../../components/ui/typography/SubHeading";

type Props = {
  src: string;
  alt?: string;
};

export const StatCard = ({ src, alt, children }: PropsWithChildren<Props>) => {
  return (
    <Card className="flex aspect-video w-full flex-row items-center gap-x-6 overflow-hidden bg-background__card p-4 sm:aspect-auto sm:w-auto">
      <img
        src={src}
        alt={alt}
        className="aspect-square w-1/4 object-contain sm:h-10"
      />
      <SubHeading className="flex flex-col text-sm sm:text-base">
        {children}
      </SubHeading>
    </Card>
  );
};
