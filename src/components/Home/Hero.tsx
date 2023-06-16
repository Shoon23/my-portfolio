import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[95vh] ">
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
              className="text-green-500"
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

          <motion.button
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
            className="mt-4 font-semibold border-2 border-green-500 self-center px-3 py-1 md:px-5 md:py-2 shadow-lg transition ease-in delay-150 hover:scale-110  hover:text-white hover:bg-green-500"
          >
            <a href="#contacts">Contact Me</a>
          </motion.button>
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
