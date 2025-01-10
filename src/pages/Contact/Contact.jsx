import { motion } from "motion/react";
import ContactBlob from "./ContactBlob";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  return (
    <div className="lg:grid gap-2 lg:mx-0 mx-10 pt-10 lg:items-center lg:place-items-center min-h-[85vh]  lg:grid-cols-[2fr_1fr] lg:text-left text-center flex flex-row justify-center items-center">
      <motion.div
        key="contactDetails"
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-10vw" }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <ContactDetails />
      </motion.div>

      <ContactBlob />
    </div>
  );
};
export default Contact;
