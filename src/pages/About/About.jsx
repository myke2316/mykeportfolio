import AboutBlob from "./AboutBlob";
import { motion } from "motion/react";

import { useState } from "react";

import AboutNavigation from "./AboutNavigation";
import AboutContainer from "./AboutContainer";
import InterestContainer from "./InterestContainer";
import EducationContainer from "./EducationContainer";
const About = () => {
  const [status, setStatus] = useState(0);

  function handleOnClick(num) {
    setStatus(num);
  }
  return (
    <div className="lg:grid gap-2 lg:items-center lg:place-items-center min-h-[85vh]  lg:grid-cols-[.5fr_1fr] lg:text-left text-center flex flex-row justify-center items-center">
      <AboutBlob />
      <div className="w-full overflow-hidden">
        {/* Buttons for navigating, not button more like a navigation */}
        <AboutNavigation handleOnClick={handleOnClick} status={status} />

        <motion.hr
          initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: "0vw" }}
          exit={{ opacity: 0, duration: "0" }}
          transition={{
            duration: 1,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          class="h-px my-4 mx-[100px] lg:mx-auto bg-gray-200 border-0 dark:bg-gray-700"
        />

        {/* CONTENT */}
        {status === 0 ? (
          <AboutContainer />
        ) : status === 1 ? (
          <InterestContainer />
        ) : (
          <EducationContainer />
        )}
      </div>
    </div>
  );
};
export default About;
