import Paper from "../../components/ui/surface/Paper";
import Heading from "../../components/ui/typography/Heading";
import FAQTile from "./FAQTile";

type Props = {};

const FAQs = (props: Props) => {
  return (
    <div className="mx-auto my-16 hidden max-w-5xl sm:block">
      <div className="heading flex flex-col items-center gap-y-4">
        <Heading className="text-3xl text-theme__primary">FAQs</Heading>
        <Heading className="text-5xl font-bold">
          incase you missed anything
        </Heading>
      </div>
      <div className="faqs mt-12 bg-background__secondary px-32 pb-16 pt-8">
        <FAQTile />
        <FAQTile />
        <FAQTile />
        <Paper className="rounded-sm bg-theme__primary text-font__secondary">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam, id
          pellentesque impdiet suspe. liquam, id tesque imperdiet suspendisse “
        </Paper>
      </div>
    </div>
  );
};

export default FAQs;
