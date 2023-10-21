import Button from "../../../ui/input/Button";
import Link from "../../../ui/navigation/Link";

type Props = {};

const DesktopNav = (props: Props) => {
  return (
    <div className="w-0 h-0 overflow-hidden md:w-full md:h-24 bg-nav__background px-6 ">
      <div className="flex  md:h-full justify-between w-full">
        <div className="mx-14 md:mx-16 flex my-4">
          <img src="logo.png" alt="logo" />
        </div>
        <div className=" grow flex justify-center items-center px-8">
          <div className="flex items-center w-[60%]  justify-between  ">
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
        <div className="flex items-center justify-center mx-4">
          <Button className="bg-button__primary font-semibold ">
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
