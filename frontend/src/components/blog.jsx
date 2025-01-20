import React from "react";
import { motion } from "framer-motion";
import web from "../assets/image0.jpg";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We provide full-stack web development services using modern technologies. Our team builds scalable, responsive, and user-friendly web applications tailored to your business needs.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    icon: web,
  },
  {
    id: 2,
    title: "Web Design",
    description:
      "Our web design services focus on creating beautiful, intuitive, and responsive user interfaces. We aim to create a seamless user experience that aligns with your brand’s identity.",
    technologies: ["Figma", "Adobe XD", "Sketch", "Tailwind CSS"],
    icon: web,
  },
  {
    id: 3,
    title: "App Development",
    description:
      "We specialize in developing cross-platform mobile applications for iOS and Android. Whether it’s a native or hybrid app, we ensure that it meets the highest standards of functionality and user experience.",
    technologies: ["React Native", "Flutter", "Firebase", "Node.js"],
    icon: web,
  },
  {
    id: 4,
    title: "Cloud Hosting",
    description:
      "Our cloud hosting services offer scalable, secure, and reliable hosting solutions for your applications. We ensure your websites and apps are hosted on high-performance infrastructure with 24/7 support.",
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
    icon: web,
  },
];

const Blog = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-blue-600 mb-12 tracking-wide text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Services
        </motion.h2>

        {/* Services List */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white overflow-hidden p-6 group  duration-300  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 shadow-lg hover:shadow-xl rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-72 object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="text-left">
                  <h4 className="text-xl font-semibold text-blue-600">
                    Technologies Used
                  </h4>
                  <ul className="list-disc pl-6 mt-2 text-gray-600">
                    {service.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>

                {/* Button to view more details */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
