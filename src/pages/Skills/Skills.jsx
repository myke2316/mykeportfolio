import { useState } from "react";
import SkillsBlob from "./SkillsBlob";
import Techstack from "./Techstack";
import SkillsNavigation from "./SkillsNavigation";
import { motion } from "motion/react";
const Skills = () => {
  const [navSelect, setNavSelect] = useState("techstack");
  function handleOnClick(selected) {
    setNavSelect(selected);
  }
  return (
    <div className="lg:grid gap-2 lg:items-center lg:place-items-center min-h-[85vh] pt-10  lg:grid-cols-2 lg:text-left text-center flex flex-row justify-center items-center">
      <div>
        <SkillsNavigation handleOnClick={handleOnClick} navSelect={navSelect} />
        <motion.hr
          initial={{ opacity: 0, x: "-50vw" }}
          animate={{ opacity: 1, x: "0vw" }}
          exit={{ opacity: 0, duration: "0" }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"
        />
        <motion.div
          exit={{ opacity: 0, x: "-50vw" }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {" "}
          <Techstack navSelect={navSelect} />
        </motion.div>
      </div>

      <SkillsBlob />
    </div>
  );
};
export default Skills;
