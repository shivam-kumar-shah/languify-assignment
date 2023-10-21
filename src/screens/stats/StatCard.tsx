import React, { PropsWithChildren } from "react";
import Card from "../../components/ui/surface/Card";
import SubHeading from "../../components/ui/typography/SubHeading";

type Props = {
  src: string;
  alt?: string;
};

export const StatCard = ({ src, alt, children }: PropsWithChildren<Props>) => {
  return (
    <Card className="flex flex-row items-center gap-x-6 bg-background__card">
      <img src={src} alt={alt} className="h-10 aspect-square object-contain" />
      <SubHeading className="text-base flex flex-col">{children}</SubHeading>
    </Card>
  );
};
