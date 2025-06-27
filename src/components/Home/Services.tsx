import {
  IconBrandReact,
  IconDeviceDesktopCode,
  IconLayersIntersect,
} from "@tabler/icons-react";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import "./home.css";
type ServicesProps = {
  sectionRef: React.RefObject<HTMLElement>;
};
const Services = ({ sectionRef }: ServicesProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="services"
      className="min-h-screen flex items-center justify-center"
      ref={sectionRef}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-5 py-10 md:px-10 md:py-20">
        <motion.h1
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
          className="text-4xl font-bold text-[#44819E]"
        >
          Services
        </motion.h1>

        <div className="flex mt-10 space-x-8  flex-wrap md:flex-nowrap">
          <motion.div
            animate={
              inView && {
                opacity: 1,
                y: 0,
              }
            }
            initial={{
              opacity: 0,
              y: 80,
            }}
            transition={{
              delay: 0.6,
              ease: "easeInOut",
            }}
            className="flex-1 service-card"
          >
            <IconDeviceDesktopCode
              className="mb-1 stroke-[#44819E]"
              size={45}
            />
            <motion.h1
              animate={
                inView && {
                  opacity: 1,
                  y: 0,
                }
              }
              initial={{
                opacity: 0,
                y: 80,
              }}
              transition={{
                delay: 0.8,
                ease: "easeInOut",
              }}
              className="text-md md:text-xl font-semibold"
            >
              RESTful API Development and Integration
            </motion.h1>
            <motion.p
              animate={
                inView && {
                  opacity: 1,
                  y: 0,
                }
              }
              initial={{
                opacity: 0,
                y: 80,
              }}
              transition={{
                delay: 1,
                ease: "easeInOut",
              }}
              className="mt-2 text-sm md:text-md text-gray-600 indent-4"
            >
              I specialize in building robust and secure RESTful APIs using
              Node.js and Express. By seamlessly integrating APIs, I enable
              smooth communication and efficient data exchange between different
              systems, empowering your applications with advanced capabilities.
            </motion.p>
          </motion.div>
          <motion.div
            animate={
              inView && {
                opacity: 1,
                y: 0,
              }
            }
            initial={{
              opacity: 0,
              y: 80,
            }}
            transition={{
              delay: 0.8,
              ease: "easeInOut",
            }}
            className=" flex-1 service-card"
          >
            <IconBrandReact
              className="mb-1 stroke-[#44819E]"
              size={45}
              stroke={1.5}
            />

            <motion.h1
              animate={
                inView && {
                  opacity: 1,
                  y: 0,
                }
              }
              initial={{
                opacity: 0,
                y: 80,
              }}
              transition={{
                delay: 1,
                ease: "easeInOut",
              }}
              className="text-md md:text-xl font-semibold"
            >
              Front-End Development with React
            </motion.h1>
            <motion.p
              animate={
                inView && {
                  opacity: 1,
                  y: 0,
                }
              }
              initial={{
                opacity: 0,
                y: 80,
              }}
              transition={{
                delay: 1.2,
                ease: "easeInOut",
              }}
              className="mt-2 text-sm md:text-md text-gray-600 indent-4"
            >
              I implement captivating web designs with React, creating engaging
              and visually appealing user interfaces.
            </motion.p>
          </motion.div>
          <motion.div
            animate={
              inView && {
                opacity: 1,
                y: 0,
              }
            }
            initial={{
              opacity: 0,
              y: 80,
            }}
            transition={{
              delay: 1,
              ease: "easeInOut",
            }}
            className="flex-1 mt-3 md:mt-0 service-card"
          >
            <IconLayersIntersect className="mb-1  stroke-[#44819E]" size={45} />
            <motion.h1
              animate={
                inView && {
                  opacity: 1,
                  y: 0,
                }
              }
              initial={{
                opacity: 0,
                y: 80,
              }}
              transition={{
                delay: 1.2,
                ease: "easeInOut",
              }}
              className="text-md md:text-xl font-semibold"
            >
              Custom Web Application Development
            </motion.h1>
            <motion.p
              animate={
                inView && {
                  opacity: 1,
                  y: 0,
                }
              }
              initial={{
                opacity: 0,
                y: 80,
              }}
              transition={{
                delay: 1.4,
                ease: "easeInOut",
              }}
              className="mt-2 text-sm md:text-md text-gray-600 indent-4"
            >
              I design and develop tailor-made web applications that meet your
              unique requirements. From intuitive user interfaces to complex
              back-end integrations, I ensure seamless functionality and a
              smooth user experience.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
