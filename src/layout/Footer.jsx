import { FaFacebook, FaLinkedin, FaPhone, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const footerData = {
  companyInfo: {
    address: "adresse: 1, rue de la paix, 20000 Casablanca, Maroc",
    phone: "+212 0 00 00 00 00",
  },
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "link", path: "/jobs" },
    { name: "link", path: "/faqs" },
  ],
  services: [
    { name: "service", path: "/telecommunication" },
    { name: "service", path: "/etude-conseil" },
    { name: "service", path: "/archivage-physique" },
    { name: "service", path: "/archivage-electronique" },
    { name: "service", path: "/formation" },
    { name: "service", path: "/travail-a-distance" },
  ],
  socialLinks: [
    { name: "LinkedIn", url: "#", icon: FaLinkedin, color: "text-blue-600" },
    { name: "Facebook", url: "#", icon: FaFacebook, color: "text-blue-500" },
    { name: "Twitter", url: "#", icon: FaTwitter, color: "text-blue-400" },
    { name: "Instagram", url: "#", icon: FaInstagram, color: "text-pink-600" },
  ],
};

function Footer() {
  return (
    <footer className="bg-white dark:bg-darkBg border-t shadow-md">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Logo & Contact */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042"
                alt="Logo"
                className="w-28"
              />
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              {footerData.companyInfo.address}
            </p>
            <p className="mt-2 flex items-center space-x-2 text-gray-800 dark:text-gray-300">
              <FaPhone className="text-primary" size={20} />
              <span>{footerData.companyInfo.phone}</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-gray-600 hover:text-primary dark:text-gray-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-gray-600 hover:text-primary dark:text-gray-400">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {footerData.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`text-gray-600 hover:${social.color} dark:text-gray-400`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-6 text-center text-gray-500 text-sm dark:text-gray-400">
          <p>
            Designed & Developed by{" "}
            <a href="https://laaguili-dev.app.genez.io/" className="text-primary hover:underline dark:text-darkText">
              MOHAMED LAAGUILI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
