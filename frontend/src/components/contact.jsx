import React from "react";
import backgroundImage from "../assets/image0.jpg";

const Contact = ({ title = "Contact Us", image = backgroundImage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="contact"
        aria-label="Contact Section"
        className="relative bg-cover bg-center bg-no-repeat h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
        }}
      >
        <div className="relative text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mt-10">
            {title}
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            Get in touch with us to discuss your next project or collaboration.
          </p>
        </div>
      </section>

      <form className="mx-4 my-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="text-2xl font-bold mb-4">Reach Us:</h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-1/2 p-2 text-sm text-gray-700 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-1/2 p-2 text-sm text-gray-700 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full md:w-1/2 p-2 text-sm text-gray-700 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Your Message"
          ></textarea>

          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
