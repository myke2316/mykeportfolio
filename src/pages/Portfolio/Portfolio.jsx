import PortfolioBlob from "./PortfolioBlob";
import PortfolioDetails from "./PortfolioDetails";
import { motion } from "motion/react";
function Portfolio() {
  return (
    <div className=" lg:grid gap-10 lg:items-center lg:place-items-center min-h-[85vh] lg:grid-cols-[300px_2fr] lg:text-left text-center flex flex-col justify-center items-center">
      <PortfolioBlob />
      <div className="w-full max-w-4xl overflow-hidden">
        <motion.h1
          initial={{ opacity: 1, x: "45vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "45vw" }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-3xl text-yellow-200 "
        >
          Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: "50vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "50vw" }}
          transition={{
            duration: 0.3,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-[15px] text-zinc-500"
        >
          Discover some of my works and projects.
        </motion.p>

        <motion.hr
          initial={{ opacity: 0, x: "50vw" }}
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
          initial={{ opacity: 1, x: "45vw" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "45vw" }}
          transition={{
            duration: 0.8,
            delay: 0,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <PortfolioDetails />
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
