import { motion } from "motion/react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const item = [
  { name: "About me", id: 0 },
  { name: "Interests", id: 1 },
  { name: "Education", id: 2 },
];
const AboutNavigation = ({ handleOnClick, status }) => {
  return (
    <div className="flex flex-wrap items-center gap-2 lg:justify-start justify-center">
      {item.map((items, index) => (
        <>
          <motion.button
            layout
            initial={{ opacity: 1, x: "45vw" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "45vw" }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={`text-3xl ${status === items.id && "text-yellow-200"}`}
            type="button"
            onClick={() => handleOnClick(items.id)}
          >
            {items.name}
          </motion.button>
          {index < item.length - 1 && (
            <motion.div
              layout
              initial={{ opacity: 1, x: "45vw" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "45vw" }}
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
export default AboutNavigation;
