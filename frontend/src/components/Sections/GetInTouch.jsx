import React, { useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const SERVICE_ID = "service_4f6piqj";
const TEMPLATE_ID = "template_fea8rcf";
const PUBLIC_KEY = "4qoSaODZi3_5jBQOf";

function GetInTouch() {
  const { isDarkMode } = useTheme();
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");
    setSent(false);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setSent(true);
        form.current.reset();
      },
      (error) => {
        setError("Failed to send. Please try again.");
      }
    );
  };

  return (
    <motion.div
      className={`${
        isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      } flex flex-col items-center w-full h-full`}
    >
      <motion.div className="flex gap-1 mt-10 justify-center items-center">
        <motion.h2
          className={`${isDarkMode ? "text-white" : "text-gray-900"} text-5xl`}
        >
          Get In
        </motion.h2>

        <motion.h2 className="text-5xl font-medium text-blue-500">
          Touch
        </motion.h2>
      </motion.div>

      <motion.div className="flex flex-row gap-20 mt-10 justify-center items-center">
        {/* Send me a message */}
        <motion.div
          className={`${
            isDarkMode ? "bg-gray-900" : "bg-gray-100"
          } px-10 py-8 border-1 rounded-2xl shadow-lg`}
        >
          <motion.h2
            className={`${
              isDarkMode ? "text-white" : "text-gray-900"
            } text-2xl font-medium mb-4`}
          >
            Send me a message
          </motion.h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                className={`${
                  isDarkMode ? "bg-gray-900" : "bg-white"
                } p-2 border-1 border-gray-100 rounded-md w-1/2`}
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className={`${
                  isDarkMode ? "bg-gray-900" : "bg-white"
                } p-2 border-1 border-gray-100 rounded-md w-1/2`}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              required
              className={`${
                isDarkMode ? "bg-gray-900" : "bg-white"
              } p-2 border-1 border-gray-100 rounded-md w-full mt-4`}
            />
            <button
              type="submit"
              className={`${
                isDarkMode ? "bg-blue-500" : "bg-blue-500"
              } text-white p-2 rounded-md mt-4 w-full hover:bg-blue-600 transition-all duration-300`}
            >
              Send
            </button>
            {sent && (
              <p className="text-green-600 mt-2">Message sent! Thank you.</p>
            )}
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        </motion.div>

        {/* Contact information */}
        <motion.div className="flex-1 min-w-[500px] max-w-md">
          <motion.h2
            className={`${
              isDarkMode ? "text-white" : "text-gray-900"
            } text-2xl font-medium`}
          >
            Contact information
          </motion.h2>
          <motion.div className="flex flex-col gap-2 mt-4 mb-2 w-full">


              <motion.div
                className={`${
                  isDarkMode ? "bg-gray-900" : "bg-gray-100"
                } flex flex-row p-5 border-1 border-gray-400 rounded-2xl w-full gap-4 items-center`}
              >
                <FaLocationDot className="w-8 h-8" />
                <motion.div className="flex flex-col">
                <motion.h2
                  className={`${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } text-xl font-medium`}
                >
                  Location
                </motion.h2>
                <motion.h2 className="text-gray-500">
                  Massachusetts, USA
                </motion.h2>
                </motion.div>



            </motion.div>

            <motion.div
              className={`${
                isDarkMode ? "bg-gray-900" : "bg-gray-100"
              } flex flex-row p-5 border-1 border-gray-400 rounded-2xl w-full gap-4 items-center`}
            >
                <FaEnvelope className="w-8 h-8" />
                <motion.div className="flex flex-col">
              <motion.h2
                className={`${
                  isDarkMode ? "text-white" : "text-gray-900"
                } text-xl font-medium`}
              >
                Email
              </motion.h2>
                <motion.h2 className="text-gray-500">
                  doanlyminh2005@@gmail.com
                </motion.h2>
                </motion.div>
            </motion.div>

            <motion.div
              className={`${
                isDarkMode ? "bg-gray-900" : "bg-gray-100"
              } flex flex-row p-5 border-1 border-gray-400 rounded-2xl w-full gap-4 items-center`}
            >
                <FaPhone className="w-8 h-8" />
                <motion.div className="flex flex-col">
              <motion.h2
                className={`${
                  isDarkMode ? "text-white" : "text-gray-900"
                } text-xl font-medium`}
              > 
                Phone
              </motion.h2>
              <motion.h2 className="text-gray-500">+1 (617)516-5610</motion.h2>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default GetInTouch;
