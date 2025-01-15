import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
  FaCcPaypal,
  FaCcStripe,
} from "react-icons/fa";
const Footer = () => {
  // Inline Styles
  const styles = {
    container: {
      padding: "20px",
      paddingTop: "1.5rem",
      fontFamily: "Arial, sans-serif",
    },
    info: {
      textAlign: "left",
      marginBottom: "20px",
    },
    infoItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "15px",
    },
    icon: {
      fontSize: "20px",
      color: "#007BFF",
      marginRight: "10px",
    },
    link: {
      textDecoration: "none",
      color: "#007BFF",
      fontWeight: "bold",
    },
    cta: {
      marginTop: "20px",
    },
    button: {
      textDecoration: "none",
      color: "#fff",
      backgroundColor: "#007BFF",
      padding: "10px 20px",
      borderRadius: "5px",
      fontWeight: "bold",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <footer
      className="footer max-w-full bg-gray-800 text-white 
      overflow-hidden
    "
    >
      <div className="container p-4 sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center   ">
        <div style={styles.container}>
          <div style={styles.info}>
            {/* Address */}
            <div style={styles.infoItem}>
              <FaMapMarkerAlt style={styles.icon} />
              <p>Eldoret,Kenya</p>
            </div>
            {/* Phone */}
            <div style={styles.infoItem}>
              <FaPhone style={styles.icon} />
              <p>
                <a href="tel:+1234567890" style={styles.link}>
                  +1 (234) 567-890
                </a>
              </p>
            </div>
            {/* Email */}
            <div style={styles.infoItem}>
              <FaEnvelope style={styles.icon} />
              <p>
                <a href="mailto:contact@company.com" style={styles.link}>
                  colman@company.com
                </a>
              </p>
            </div>
          </div>
          {/* Contact Form Link */}
          <div style={styles.cta}>
            <a href="/contact" style={styles.button}>
              Contact Us
            </a>
          </div>
        </div>
        {/* Navigation Links */}
        <div>
          <h3
            className="text-lg font-bold text-white mb-4 pt-6
          text-transform:uppercase"
          >
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-blue-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Payment Methods */}
        <div>
          <h3
            className="text-lg font-bold text-white mb-4 pt-6
          text-transform:uppercase"
          >
            We accept the following Payment Methods
          </h3>
          <div className="flex flex-col justify-center items-center ">
            <div>
              {" "}
              <FaCcPaypal className="text-3xl text-blue-700" />
            </div>

            <div>
              <FaCcVisa className="text-3xl text-blue-700" />
            </div>
            <div>
              {" "}
              <FaCcMastercard className="text-3xl text-blue-700" />
            </div>
            <div>
              {" "}
              <FaCcDiscover className="text-3xl text-blue-700" />
            </div>
            <div>
              {" "}
              <FaCcAmex className="text-3xl text-blue-700" />
            </div>

            <div>
              {" "}
              <FaCcStripe className="text-3xl text-blue-700" />
            </div>
          </div>
        </div>
        {/* Language and Accessibility Options */}
        <div>
          <h3 className="text-lg font-bold text-white  p-6 mb-4">Options</h3>
          <div className="mb-4">
            <label
              htmlFor="language-select"
              className="block text-sm font-medium text-gray-300"
            >
              Choose Language:
            </label>
            <select
              id="language-select"
              className="mt-2 w-full bg-gray-700 text-white rounded-md p-2"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
          <ul className="space-y-2">
            <li>
              <a href="/accessibility" className="hover:text-blue-400">
                Accessibility Statement
              </a>
            </li>
            <li>
              <a href="/help" className="hover:text-blue-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="/feedback" className="hover:text-blue-400">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="flex justify-center space-x-4 bd-top pt-6">
            <FaFacebook className="text-3xl text-blue-700 hover:cursor-pointer hover:scale-90" />
            <FaInstagram
              className="text-3xl text-red-500
          hover:cursor-pointer hover:scale-90"
            />
            <FaTwitter
              className="text-3xl text-blue-400
          hover:cursor-pointer hover:scale-90"
            />
            <FaYoutube
              className="text-3xl text-red-600
          hover:cursor-pointer hover:scale-90"
            />
            <FaGithub
              className="text-3xl text-gray-600
          hover:cursor-pointer hover:scale-90"
            />
          </div>
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-white-700 font-bold mb-2">
              © 2025 by Colman. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
