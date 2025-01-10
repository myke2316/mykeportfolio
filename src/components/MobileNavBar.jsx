import { Link } from "react-router-dom";
import { motion } from "motion/react";
import HouseIcon from "@mui/icons-material/House";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PhoneIcon from "@mui/icons-material/Phone";
const MobileNavBar = () => {
  return (
    <nav className=" sm:text-2xl lg:1xl md:1.5xl text-white">
      <motion.ul
        initial={{ scale: 1, y: "0" }}
        animate={{ scale: 1, y: "0" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex justify-center gap-10 items-center p-4 mx-0 w-full bg-neutral-900 border rounded-md"
      >
        <li>
          <Link to={"/"}>
            <HouseIcon />
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <InfoIcon />
          </Link>
        </li>
        <li>
          <Link to={"/skills"}>
            <PersonIcon />
          </Link>
        </li>
        <li>
          <Link to={"/portfolio"}>
            <HomeRepairServiceIcon />
          </Link>
        </li>
        <li>
          <Link to={"/contact"}>
            <PhoneIcon />
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};
export default MobileNavBar;
