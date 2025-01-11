import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname; // Get the current pathname

  return (
    <nav className="sm:text-2xl lg:text-xl md:text-1.5xl text-white bg-neutral-900 bg-noise-pattern bg-blend-soft-light">
      <motion.ul
        initial={{ scale: 1, y: "0" }}
        animate={{ scale: 1, y: "0" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex justify-between items-center py-5 lg:mx-[100px] mx-0"
      >
        <li className="relative group transition-all duration-300 transform hover:scale-110">
          <Link
            to={"/"}
            className={`${
              currentPath === "/" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            Home
          </Link>
        </li>
        <li className="relative group transition-all duration-300 transform hover:scale-110">
          <Link
            to={"/about"}
            className={`${
              currentPath === "/about" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            About
          </Link>
        </li>
        <li className="relative group transition-all duration-300 transform hover:scale-110">
          <Link
            to={"/skills"}
            className={`${
              currentPath === "/skills" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            Skills
          </Link>
        </li>
        <li className="relative group transition-all duration-300 transform hover:scale-110">
          <Link
            to={"/portfolio"}
            className={`${
              currentPath === "/portfolio" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            Portfolio
          </Link>
        </li>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          className="border-2 p-2 text-xl border-yellow-200 transition-all"
        >
          <Link
            to={"/contact"}
            className={`${
              currentPath === "/contact" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            Contact Me
          </Link>
        </motion.button>
      </motion.ul>
    </nav>
  );
};

export default NavBar;
