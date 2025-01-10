import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion } from "framer-motion";

const AboutDetails = ({ title, value }) => {
  return (
    <motion.div>
      <span>
        <KeyboardDoubleArrowRightIcon
          sx={{
            fontSize: 20,
            color: "#FEF08A",
            filter: "drop-shadow(0 0 1px #FEF08A) drop-shadow(0 0 5px #FEF08A)",
          }}
          className="animate-pulse"
        />
      </span>{" "}
      {title}: <span className="text-[17px]">{value}</span>
    </motion.div>
  );
};

export default AboutDetails;
