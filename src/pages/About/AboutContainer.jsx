import AboutDetails from "./AboutDetails";
import { motion } from "motion/react";
const AboutContainer = () => {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, x: "50vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "50vw" }}
        transition={{
          duration: 0.3,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-[15px] opacity-[80%] px-4"
      >
        Hello! I am Leian Myke Castillo an aspiring Web Developer and Software
        Developer. A 4th year college IT student at Batangas State University
        Malvar Campus actively honing my skills.{" "}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: "50vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "50vw" }}
        transition={{
          duration: 0.2,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-5"
      >
        <AboutDetails title={"Age"} value={"21 years old"} />
        <AboutDetails title={"Phone(PH)"} value={"+63 995-893-6110"} />
        <AboutDetails title={"Email"} value={"leianmykecastillo@gmail.com"} />
        <AboutDetails title={"City"} value={"Tanauan City, Batangas"} />
        <AboutDetails title={"College Graduate"} value={"2021-2025"} />
      </motion.div>
    </div>
  );
};
export default AboutContainer;
