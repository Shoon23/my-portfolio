import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  name: string;
}

const Header: React.FC<Props> = ({ name }) => {
  return (
    <header className="bg-gray-100">
      <div className="py-5 px-5 ">
        <Link to={"/projects"}>
          <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:text-green-500 flex text-md  md:text-xl items-center cursor-pointer gap-1">
            <FaLongArrowAltLeft className="w-7 h-7" />
            Go Back
          </div>
        </Link>
        <div className="flex justify-center">
          <h1 className="text-green-500 text-4xl">{name}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
