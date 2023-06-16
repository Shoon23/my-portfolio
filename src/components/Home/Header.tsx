import { IconWorld } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const navs: string[] = ["About", "Services", "Skills", "Projects"];
  const variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "-50%",
    },
  };
  const [isOpenNav, setIsOpenNav] = useState(false);
  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpenNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <nav className="flex  items-center justify-between px-7 md:px-20 py-10 ">
        <Link to={"/"}>
          <motion.ul
            animate={{
              x: 0,
            }}
            transition={{
              ease: "easeInOut",
            }}
            initial={{
              x: "-160%",
            }}
            className="flex items-center gap-1 "
          >
            <li>
              <IconWorld
                className="stroke-green-500 cursor-pointer hover:scale-110 transition ease-in-out delay-150"
                stroke={1.5}
                size={50}
              />
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-4xl font-bold cursor-pointer">
              Sean<span className="text-green-500">.</span>
            </li>
          </motion.ul>
        </Link>
        {/* desktop nav */}
        <motion.ul
          animate={{
            x: 0,
          }}
          initial={{
            x: "120%",
          }}
          transition={{
            ease: "easeInOut",
          }}
          className="hidden md:flex  gap-3 font-semibold text-lg"
        >
          {navs?.map((nav, idx) => (
            <li
              key={idx}
              className="transition ease-in-out delay-150 hover:text-green-500 hover:-translate-y-1 hover:scale-110 cursor-pointer"
            >
              <a href={`#${nav?.toLowerCase()}`}>{nav}</a>
            </li>
          ))}
          <li>
            <button className="border-2 border-green-500 self-center px-3 shadow-lg transition ease-in delay-150 hover:scale-110  hover:text-white hover:bg-green-500">
              <a href="#contacts">Contacts</a>
            </button>
          </li>
        </motion.ul>
        {/* mobile nav */}
        <div className="md:hidden">
          <button
            className="cursor-pointer transition ease-in-out delay-150 hover:scale-110"
            onClick={toggleNav}
          >
            {isOpenNav ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </nav>
      <motion.ul
        initial={{
          opacity: 0,
          x: "-50%",
        }}
        animate={isOpenNav ? "open" : "closed"}
        variants={variants}
        className={`space-x-4 fixed w-full bg-green-500 p-4 rounded-lg shadow-lg flex`}
      >
        {navs?.map((nav, idx) => (
          <li
            key={idx}
            className="transition ease-in-out delay-150 hover:text-green-500 hover:-translate-y-1 hover:scale-110 cursor-pointer"
          >
            <a href={`#${nav?.toLowerCase()}`} className="text-white">
              {nav}
            </a>
          </li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Header;
