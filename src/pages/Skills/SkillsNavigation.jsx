import { motion } from "motion/react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const item = [
  { name: "Tech Stack", nav: "techstack" },
  { name: "Tools", nav: "tools" },
  { name: "Certifications", nav: "certificate" },
];

const SkillsNavigation = ({ handleOnClick, navSelect }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 lg:justify-start justify-center">
      {item.map((items, index) => (
        <>
          <motion.button
            layout
            initial={{ opacity: 1, x: "-45vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-45vw" }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={`text-3xl ${navSelect === items.nav && "text-yellow-200"}`}
            type="button"
            onClick={() => handleOnClick(items.nav)}
          >
            {items.name}
          </motion.button>
          {index < item.length - 1 && (
            <motion.div
              layout
              initial={{ opacity: 1, x: "-45vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-45vw" }}
              transition={{
                duration: 0.8,
                delay: 0,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <KeyboardDoubleArrowRightIcon className=" text-gray-500" />
            </motion.div>
          )}
        </>
      ))}
    </div>
  );
};
export default SkillsNavigation;
