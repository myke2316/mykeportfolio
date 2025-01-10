import BlobSvg from "../../assets/blob.svg";
import { motion } from "motion/react";
const BlobComponent = () => {
  return (
    <motion.div
      key="/home"
      initial={{ opacity: 1, x: "-25vw" }}
      animate={{
        x: ["-25vw", "0vw", "0vw"],
        opacity: [1, 1, 1],
      }}
      transition={{
        duration: 1,
        delay: 0,
        times: [0, 0.3, 1],
        ease: [0, 0.2, 0.2, 1.01],
      }}
      style={{ willChange: "transform,opacity" }}
      exit={{ opacity: 1, x: " -24vw" }}
      className="relative lg:w-[450px] lg:h-[450px]"
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
export default BlobComponent;
