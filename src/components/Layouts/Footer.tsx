import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <footer ref={ref} className="flex justify-center py-8 bg-gray-100">
      <motion.h1
        animate={
          inView && {
            opacity: 1,
            x: 0,
          }
        }
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          delay: 0.6,
          ease: "easeIn",
        }}
        className="text-gray-400"
      >
        © 2023 Sean Wilfred Custodio
      </motion.h1>
    </footer>
  );
};

export default Footer;
