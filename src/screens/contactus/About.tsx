import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Body from "../../components/ui/typography/Body";
import Heading from "../../components/ui/typography/Heading";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="about flex w-full flex-col gap-y-4 border-b py-8 text-font__secondary sm:border-b-0 sm:py-0">
      <Heading className="text-2xl font-bold">About Interview</Heading>
      <Body className="text-base text-font__card">
        A fresh and an upcoming service provider, we write, design, develop
        content and consult to cater to unconventional and unorthodox
        requirements of companies, startups, and professionals. Just tell us
        what your problem is, and we’ll put in our best to ensure that you’re
        happy.
      </Body>
      <div className="socials flex flex-row gap-x-4 text-2xl text-theme__primary">
        <BsLinkedin />
        <BsInstagram />
        <BsFacebook />
      </div>
    </div>
  );
};

export default About;
