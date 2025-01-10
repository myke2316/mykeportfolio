import BlobSvg from "../../assets/blob.svg";
import { motion } from "motion/react";
const AboutBlob = () => {
  return (
    <motion.div
      key="/about"
      initial={{ opacity: 1, x: "25vw" }}
      animate={{
        opacity: 1,
        x: ["25vw", "0vw", "0vw"], // Start from -20vw, stop at 0vw, then move
        opacity: [1, 1, 1],
      }}
      exit={{ opacity: 1, x: "29vw" }}
      transition={{
        duration: 1,
        delay: 0,
        times: [0, 0.3, 1],
        ease: [0, 0.2, 0.2, 1.01]
      }}
      style={{ willChange: "transform,opacity" }}
      className="relative lg:w-[450px] lg:h-[450px] overflow-visible "
    >
      {/* Blurred Blob */}
      <img
        className="absolute w-full h-full blur-[50px]"
        src={BlobSvg}
        alt="Blurred Blob"
      />
      {/* Non-Blurred Blob */}
      <img
        className="absolute w-full h-full"
        src={BlobSvg}
        alt="Non-Blurred Blob"
      />
    </motion.div>
  );
};
export default AboutBlob;
