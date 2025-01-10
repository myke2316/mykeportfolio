import { motion } from "motion/react";
import GitHubIcon from "@mui/icons-material/GitHub";

const HomeButtons = () => {
  const handleOpenPDF = () => {
    window.open(
      "/portfolio/images/resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: "-10vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      exit={{ opacity: 0, x: "-10vw" }}
      className="flex gap-4 items-center lg:justify-normal justify-center"
    >
      <button
        type="button"
        className="lg:text-2xl border-2 border-yellow-200 p-2"
        onClick={handleOpenPDF}
      >
        Download Resume
      </button>
      <a
        href="https://linkedin.com/in/leian-myke-castillo-419713239"
        target="_blank"
      >
        <span class="[&>svg]:h-9 [&>svg]:w-9 [&>svg]:fill-[#77bdfb] ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </span>
      </a>{" "}
      <a href="https://github.com/myke2316" target="_blank">
        <span class="[&>svg]:h-9 [&>svg]:w-9 [&>svg]:fill-[#77bdfb] ">
          <GitHubIcon />
        </span>
      </a>
    </motion.div>
  );
};
export default HomeButtons;
