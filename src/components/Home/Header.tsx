import { IconWorld } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
type HeaderProps = {
  activeSection:
    | "hero"
    | "about"
    | "services"
    | "skills"
    | "projects"
    | "contact";
};
const Header = ({ activeSection }: HeaderProps) => {
  const navs: string[] = ["About", "Services", "Skills", "Projects"];

  const sectionColors: any = {
    hero: "#7e5f92",
    about: "#47926B",
    services: "#44819E",
    skills: "#AC4830",
    projects: "gray",
  };
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

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(activeSection);
  return (
    <header className={`headerMain ${scroll ? "sticky" : ""}`}>
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
                className={` cursor-pointer hover:scale-110  ease-in-out delay-150 transition-colors duration-500`}
                stroke={1.5}
                size={50}
                style={{
                  stroke: sectionColors[activeSection],
                }}
              />
            </li>
            <li className="transition-colors ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-4xl font-bold cursor-pointer duration-500">
              Sean
              <span
                style={{
                  color: sectionColors[activeSection],
                }}
              >
                .
              </span>
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
            <a
              style={{
                color: sectionColors[activeSection],
              }}
              href={`#${nav?.toLowerCase()}`}
              key={idx}
              className={` ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer transition-colors duration-500 `}
            >
              {nav}
            </a>
          ))}
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
        className={`space-x-4 fixed w-full  p-4 rounded-lg shadow-lg flex transition-colors duration-500`}
        style={{
          backgroundColor: sectionColors[activeSection],
        }}
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
