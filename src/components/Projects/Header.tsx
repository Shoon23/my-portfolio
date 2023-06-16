import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="py-5 px-5 ">
        <Link to={"/"}>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-green-500 flex text-md  md:text-xl items-center cursor-pointer gap-1">
            <FaLongArrowAltLeft className="w-7 h-7" />
            Go Back
          </div>
        </Link>
        <div className="flex justify-center">
          <h1 className="text-green-500 text-2xl md:text-4xl">My Projects</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
