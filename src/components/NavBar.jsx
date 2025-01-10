import { Link } from "react-router-dom";
import { motion } from "motion/react";

const NavBar = () => {
  return (
    <nav className=" sm:text-2xl lg:1xl md:1.5xl text-white bg-neutral-900 bg-noise-pattern bg-blend-soft-light">
      <motion.ul
        initial={{ scale: 1, y: "0" }}
        animate={{ scale: 1, y: "0" }}
        transition={{ duration: 1, delay: 0.2 }}
       
        className="flex justify-between items-center py-5 lg:mx-[100px] mx-0"
      >
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/skills"}>Skills</Link>
        </li>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          className="border-2 p-2 text-xl border-yellow-200 transition-all"
        >
          <Link to={"/contact"}>Contact Me</Link>
        </motion.button>
      </motion.ul>
    </nav>
  );
};
export default NavBar;
