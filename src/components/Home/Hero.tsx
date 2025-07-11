import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./home.css";

type HeroProps = {
  sectionRef: React.RefObject<HTMLElement>;
};

const Hero = ({ sectionRef }: HeroProps) => {
  return (
    <section ref={sectionRef} id="hero" className="min-h-[95vh] ">
      <div className="flex px-7 pt-20">
        <div className="w-1/2 flex flex-col  justify-center pl-12 gap-2">
          <motion.h1
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="text-4xl md:text-5xl font-semibold"
          >
            I'm{" "}
            <motion.span
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="text-[#7e5f92]"
            >
              Sean Wilfred Custodio
            </motion.span>
          </motion.h1>
          <motion.h1
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              delay: 0.7,
              ease: "easeInOut",
            }}
            className="text-gray-400 text-md md:text-lg"
          >
            Full-Stack Web Developer
          </motion.h1>
          <motion.a
            href="#contacts"
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            transition={{
              delay: 0.9,
              ease: "easeInOut",
            }}
            className="contact-btn text-[.6rem] md:text-lg"
            // className="font-semibold border-2 border-green-500 self-center px-3 py-1 md:px-5 md:py-2 shadow-lg transition ease-in delay-150 hover:scale-110  hover:text-white hover:bg-green-500"
          >
            Contact Me
          </motion.a>
          <div className="flex items-center flex-wrap gap-4">
            <motion.a
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                delay: 0.8,

                ease: "easeInOut",
              }}
              href="mailto:seanwilfredcustodio@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={24} />
            </motion.a>
            <motion.a
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                delay: 1,
                ease: "easeInOut",
              }}
              href="https://github.com/Shoon23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                delay: 1.2,
                ease: "easeInOut",
              }}
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </motion.a>
            {/* <motion.a
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{
                delay: 1.2,
                ease: "easeInOut",
              }}
              href="https://www.fiverr.com/kittywebdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/fiverr3.png" alt="Fiverr" width={24} height={24} />
            </motion.a> */}
          </div>
        </div>
        <motion.div
          animate={{
            opacity: 1,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            delay: 1.1,
            ease: "easeInOut",
          }}
          className="w-1/2 flex justify-center"
        >
          <img
            width={360}
            height={360}
            className="object-contain"
            src="/half.png"
            alt="My Image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
