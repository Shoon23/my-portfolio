import { useInView, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true });
  const [isSent, setIsSent] = useState(false);

  const initialEmail = {
    name: "",
    email: "",
    message: "",
  };
  // states
  const [email, setEmail] = useState<{
    name: string;
    email: string;
    message: string;
  }>(initialEmail);
  const [validationErr, setValidErr] = useState<{
    name: boolean;
    email: boolean;
    message: boolean;
  }>({
    name: false,
    email: false,
    message: false,
  });

  // on change handler
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setValidErr((prev) => ({
      ...prev,
      [e.target.name]: false,
    }));
  };
  // form submit handler

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.name) {
      return setValidErr((prev) => ({
        ...prev,
        name: true,
      }));
    }

    if (!email.email) {
      return setValidErr((prev) => ({
        ...prev,
        email: true,
      }));
    }
    if (!email.message) {
      return setValidErr((prev) => ({
        ...prev,
        message: true,
      }));
    }

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef?.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message Sent");

          setIsSent(true);
        },
        () => {
          toast.error("Something went wrong!");
        }
      );
  };

  return (
    <section id="contacts" className="h-screen bg-gray-100 ">
      <Toaster position="top-center" reverseOrder={false} />
      <div
        ref={ref}
        className="flex sm:flex-row flex-col h-full px-7 items-center justify-center gap-10 sm:gap-0"
      >
        <div className="sm:w-1/2 flex flex-col w-full  justify-center pl-8 sm:pl-12  gap-3 sm:gap-10">
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
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="text-5xl font-semibold text-green-500"
          >
            Just say hi.
          </motion.h1>
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
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="text-gray-500 text-xl sm:text-2xl"
          >
            I'm always open to discuss your project and talk about new things.
          </motion.h1>
          <div className="">
            <div className="flex items-center space-x-4">
              <motion.a
                animate={
                  inView && {
                    opacity: 1,
                  }
                }
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
                animate={
                  inView && {
                    opacity: 1,
                  }
                }
                initial={{
                  opacity: 0,
                }}
                transition={{
                  delay: 1,
                  ease: "easeInOut",
                }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                animate={
                  inView && {
                    opacity: 1,
                  }
                }
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
              <motion.a
                animate={
                  inView && {
                    opacity: 1,
                  }
                }
                initial={{
                  opacity: 0,
                }}
                transition={{
                  delay: 1.2,
                  ease: "easeInOut",
                }}
                href="https://www.fiverr.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/fiverr3.png" alt="Fiverr" width={24} height={24} />
              </motion.a>
            </div>
          </div>
        </div>
        <motion.div
          animate={
            inView && {
              opacity: 1,
              x: 0,
            }
          }
          initial={{
            opacity: 0,
            x: 500,
          }}
          transition={{
            delay: 0.8,

            ease: "easeInOut",
          }}
          className="sm:w-1/2 w-full flex sm:px-10"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="w-full">
            {/* name textbox */}
            <div className="flex gap-3">
              <div className="flex-1 mb-3">
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleOnChange}
                  value={email.name}
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Name"
                  className={` focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid  bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-green-500 focus:outline-none ${
                    validationErr?.name ? ` border-red-400` : `border-gray-300`
                  }`}
                ></input>
              </div>
              {/* email textbox */}

              <div className="flex-1 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleOnChange}
                  value={email.email}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={`focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid  bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-green-500 focus:outline-none ${
                    validationErr?.name ? `border-red-400` : `border-gray-300`
                  }`}
                ></input>
              </div>
            </div>
            <div className=" mb-3 " data-te-input-wrapper-init>
              <label htmlFor="message">Email</label>

              <textarea
                onChange={handleOnChange}
                value={email.message}
                name="message"
                id="message"
                rows={10}
                placeholder="Write your message here..."
                className={`resize-none focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-green-300 focus:outline-none ${
                  validationErr?.message ? `border-red-400` : `border-gray-300`
                }`}
              ></textarea>
            </div>
            <button
              disabled={isSent}
              type="submit"
              className="disabled:bg-gray-400 inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl bg-green-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 active:scale-95 active:opacity-85 hover:shadow-soft-xs"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
