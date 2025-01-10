import { motion } from "motion/react";
const education = [
  {
    school: "Batangas State University JPLPC Malvar",
    date: "2021 - Present",
    about: "Bachelor of Science in Information Technology",
  },
  {
    school: "Malvar Senior HighSchool",
    date: "2019 - 2021",
    about: "ICT Strand",
  },
];

const EducationContainer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Controls the delay between each child's animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };
  return (
    <motion.div
      className="flex flex-wrap gap-5 p-5 rounded-lg shadow-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {education.map((items, index) => (
        <motion.div
          key={index}
          className="border  rounded-lg p-5 shadow-lg flex-1 min-w-[300px] animate-glow"
          variants={itemVariants}
        >
          <h1 className="text-lg font-semibold text-yellow-200">
            {items.school}
          </h1>
          <p className="text-sm text-gray-600 italic">{items.date}</p>
          <p className="mt-2 text-gray-200">{items.about}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
export default EducationContainer;
