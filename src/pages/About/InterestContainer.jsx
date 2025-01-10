import { motion } from "motion/react";
import Interests from "./Interests";
import VideocamIcon from "@mui/icons-material/Videocam";
import CodeIcon from "@mui/icons-material/Code";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
const InterestContainer = () => {
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
    <>
      <motion.div
        initial={{ opacity: 0, x: "50vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "50vw" }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid grid-cols-2 gap-4 w-[100%] mx-auto "
      >
        <Interests
          value={"Video Editing"}
          icon={
            <VideocamIcon
              sx={{
                fontSize: 20,
                color: "#FEF08A",
              }}
            />
          }
        />
        <Interests
          value={"Coding"}
          icon={
            <CodeIcon
              sx={{
                fontSize: 20,
                color: "#FEF08A",
              }}
            />
          }
        />
        <Interests
          value={"Music"}
          icon={
            <MusicNoteIcon
              sx={{
                fontSize: 20,
                color: "#FEF08A",
              }}
            />
          }
        />
        <Interests
          value={"Gaming"}
          icon={
            <VideogameAssetIcon
              sx={{
                fontSize: 20,
                color: "#FEF08A",
              }}
            />
          }
        />
      </motion.div>
    </>
  );
};
export default InterestContainer;
