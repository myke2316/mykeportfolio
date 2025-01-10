import { motion } from "framer-motion";
import HTMLIcon from "./svg/html.svg";
import CSSIcon from "./svg/css.svg";
import JSIcon from "./svg/javascript.svg";
import ReactIcon from "./svg/react.svg";
import ExpressIcon from "./svg/express.svg";
import MongoDBIcon from "./svg/mongodb.svg";
import NodeJSIcon from "./svg/nodejs.svg";
import PHPIcon from "./svg/php.svg";
import CPPIcon from "./svg/cpp.svg";
import FigmaIcon from "./svg/figma.svg";
import GitHubIcon from "./svg/github.svg";
import PostmanIcon from "./svg/postman.svg";
import Certificate from "./Certificate";
import TailwindIcon from "./svg/tailwind.svg";
import ReduxIcon from "./svg/redux.svg";
import { useLocation } from "react-router-dom";

const skills = {
  HTML: "Advanced",
  CSS: "Advanced",
  Tailwind: "Intermediate",
  JS: "Intermediate",
  React: "Intermediate",
  "Express.js": "Intermediate",
  MongoDB: "Intermediate",
  "Node.js": "Intermediate",
  PHP: "Intermediate",
  "C++": "Beginner",
  Figma: "Intermediate",
  "Git/Github": "Intermediate",
  "Postman API": "Intermediate",
  Redux: "Intermediate",
};

const techstack = [
  "HTML",
  "CSS",
  "Tailwind",
  "JS",
  "React",
  "Express.js",
  "MongoDB",
  "Node.js",
  "PHP",
  "C++",
  "Redux",
];

const tools = ["Figma", "Git/Github", "Postman API"];

const techstackIcons = {
  HTML: HTMLIcon,
  CSS: CSSIcon,
  Tailwind: TailwindIcon,
  JS: JSIcon,
  React: ReactIcon,
  "Express.js": ExpressIcon,
  MongoDB: MongoDBIcon,
  "Node.js": NodeJSIcon,
  PHP: PHPIcon,
  "C++": CPPIcon,
  Redux: ReduxIcon,
};

const toolIcons = {
  Figma: FigmaIcon,
  "Git/Github": GitHubIcon,
  "Postman API": PostmanIcon,
};

const TechItem = ({ name, icon, skill }) => (
  <div
    className="flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 hover:scale-105"
    style={{
      background: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    }}
  >
    <div className="flex items-center justify-center w-14 h-14 mb-2 rounded-full">
      <img src={icon} alt={`${name} logo`} className="w-8 h-8" />
    </div>
    <span
      className="text-sm font-medium text-gray-200"
      style={{
        textShadow: "0px 1px 5px rgba(255, 255, 255, 0.4)",
      }}
    >
      {name}
    </span>
    <span
      className="text-[9px] text-gray-300 mt-1"
      style={{
        fontStyle: "italic",
      }}
    >
      {skill}
    </span>
  </div>
);

const Techstack = ({ navSelect }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  const renderContent = () => {
    if (navSelect === "techstack") {
      return (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {techstack.map((item) => (
            <motion.div key={item} variants={itemVariants}>
              <TechItem
                name={item}
                icon={techstackIcons[item]}
                skill={skills[item]}
              />
            </motion.div>
          ))}
        </motion.div>
      );
    } else if (navSelect === "tools") {
      return (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {tools.map((item) => (
            <motion.div key={item} variants={itemVariants}>
              <TechItem
                name={item}
                icon={toolIcons[item]}
                skill={skills[item]}
              />
            </motion.div>
          ))}
        </motion.div>
      );
    } else {
      return <Certificate />;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {renderContent()}
      </motion.div>
    </div>
  );
};

export default Techstack;
