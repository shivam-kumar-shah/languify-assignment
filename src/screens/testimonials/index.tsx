import Paper from "../../components/ui/surface/Paper";
import Heading from "../../components/ui/typography/Heading";
import TestimonialCard from "./TestimonialCard";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section className="mx-auto my-16 max-w-5xl px-4 sm:p-0">
      <Paper className="flex w-full flex-col gap-y-12 overflow-hidden rounded-lg bg-background__card__secondary p-8 sm:p-16">
        <Heading className="flex flex-col text-3xl font-bold text-font__secondary sm:text-5xl">
          <span>don’t just take our</span>
          <span>word for it...</span>
        </Heading>
        <div className="testimonials flex flex-row gap-x-8 overflow-x-auto">
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </Paper>
    </section>
  );
};

export default Testimonials;
