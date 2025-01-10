import { motion } from "motion/react";
const HomeBanner = () => {
  return (
    <div className="mb-8">
      <motion.p
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-10vw" }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="lg:text-2xl text-xl  opacity-[50%] mb-3"
      >
        Hello World! I'm
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}exit={{ opacity: 0, x: "-10vw" }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="lg:text-7xl text-5xl font-bold mb-4 text-yellow-200"
      >
        Leian Myke H. Castillo
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}exit={{ opacity: 0, x: "-10vw" }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=" lg:text-2xl md:text-xl text-[17px]"
      >
        A passionate IT student aspiring to excel in software and web
        development.
      </motion.p>
    </div>
  );
};
export default HomeBanner;
