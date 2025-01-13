import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import HouseIcon from "@mui/icons-material/House";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PhoneIcon from "@mui/icons-material/Phone";

const MobileNavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname; // Get the current pathname

  return (
    <nav className="sm:text-2xl lg:text-xl md:text-1.5xl text-white">
      <motion.ul
        initial={{ scale: 1, y: "0" }}
        animate={{ scale: 1, y: "0" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex justify-around items-center p-4 mx-0 w-full bg-neutral-900/50 border rounded-md backdrop-blur-md"

      >
        <li className="relative group transition-all duration-300 transform hover:scale-110">
          <Link
            to={"/"}
            className={`flex flex-col items-center ${
              currentPath === "/" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            <HouseIcon fontSize="large" />
            <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300">
              Home
            </span>
          </Link>
        </li>
        <li className="relative group transition-all duration-300 transform hover:scale-110">
          <Link
            to={"/about"}
            className={`flex flex-col items-center ${
              currentPath === "/about" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            <InfoIcon fontSize="large" />
            <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300">
              About
            </span>
          </Link>
        </li>
        <li className="relative group transition-all duration-300 transform hover:scale-110">
          <Link
            to={"/skills"}
            className={`flex flex-col items-center ${
              currentPath === "/skills" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            <PersonIcon fontSize="large" />
            <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300">
              Skills
            </span>
          </Link>
        </li>
        <li className="relative group transition-all duration-300 transform hover:scale-110">
          <Link
            to={"/portfolio"}
            className={`flex flex-col items-center ${
              currentPath === "/portfolio" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            <HomeRepairServiceIcon fontSize="large" />
            <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300">
              Portfolio
            </span>
          </Link>
        </li>
        <li className="relative group transition-all duration-300 transform hover:scale-110">
          <Link
            to={"/contact"}
            className={`flex flex-col items-center ${
              currentPath === "/contact" ? "text-yellow-200" : "hover:text-yellow-200"
            }`}
          >
            <PhoneIcon fontSize="large" />
            <span className="absolute bottom-[-30px] opacity-0 group-hover:opacity-100 text-sm text-white transition-opacity duration-300">
              Contact
            </span>
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default MobileNavBar;
