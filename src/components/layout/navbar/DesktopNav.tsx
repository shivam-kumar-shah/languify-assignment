import Button from "../../ui/input/Button";
import Link from "../../ui/navigation/Link";

type Props = {};

const DesktopNav = (props: Props) => {
  return (
    <div className="h-0 w-0 overflow-hidden bg-nav__background px-6 md:h-24 md:w-full ">
      <div className="flex w-full justify-between md:h-full">
        <div className="mx-14 my-4 flex md:mx-16">
          <img src="logo.png" alt="logo" />
        </div>
        <div className=" flex grow items-center justify-center px-8">
          <div className="flex w-[60%] items-center  justify-between  ">
            <Link to="" className="text-font__secondary">
              About Us
            </Link>
            <Link to="" className="text-font__secondary">
              Our Products
            </Link>
            <Link to="" className="text-font__secondary">
              Perks
            </Link>
            <Link to="" className="text-font__secondary">
              Testimonials
            </Link>
            <Link to="" className="text-font__secondary">
              FAQ's
            </Link>
          </div>
        </div>
        <div className="mx-4 flex items-center justify-center">
          <Button className="bg-button__primary font-semibold ">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
