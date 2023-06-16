import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 flex items-center justify-center"
    >
      <div ref={ref} className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            animate={
              inView && {
                opacity: 1,
                x: 0,
              }
            }
            initial={{
              opacity: 0,
              x: -40,
            }}
            transition={{
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="text-2xl font-bold text-green-500 mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            animate={
              inView && {
                opacity: 1,
                x: 0,
              }
            }
            initial={{
              opacity: 0,
              x: 120,
            }}
            transition={{
              delay: 0.6,
              ease: "easeInOut",
            }}
            className="text-lg text-gray-600 leading-relaxed indent-6"
          >
            Hi, I'm Sean Wilfred T. Custodio, a passionate full-stack web
            developer. With expertise in React, Node.js, Express, MySQL, and
            PostgreSQL, I specialize in creating custom web applications and
            delivering exceptional front-end experiences.
          </motion.p>
          <motion.p
            animate={
              inView && {
                opacity: 1,
                x: 0,
              }
            }
            initial={{
              opacity: 0,
              x: -120,
            }}
            transition={{
              delay: 0.8,
              ease: "easeInOut",
            }}
            className="text-lg text-gray-600 leading-relaxed mt-4 indent-6"
          >
            I am dedicated to transforming your ideas into powerful online
            solutions that drive results. Whether you need a user-friendly web
            application, seamless API integration, or captivating front-end
            design, I have the skills and knowledge to bring your vision to
            life.
          </motion.p>
          <motion.p
            animate={
              inView && {
                opacity: 1,
                x: 0,
              }
            }
            initial={{
              opacity: 0,
              x: 120,
            }}
            transition={{
              delay: 1,
              ease: "easeInOut",
            }}
            className="text-lg text-gray-600 leading-relaxed mt-4 indent-6"
          >
            I believe in clean and efficient code, attention to detail, and
            continuous learning to stay up-to-date with the latest industry
            trends. My goal is to provide you with tailored web solutions that
            empower your online presence and help your business thrive.
          </motion.p>
          <motion.p
            animate={
              inView && {
                opacity: 1,
                x: 0,
              }
            }
            initial={{
              opacity: 0,
              x: 1 - 20,
            }}
            transition={{
              delay: 1.2,
              ease: "easeInOut",
            }}
            className="text-lg text-gray-600 leading-relaxed mt-4 indent-6"
          >
            Let's work together to make your digital dreams a reality. Get in
            touch to discuss your project and discover how I can assist you in
            achieving your goals.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
