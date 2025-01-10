import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ContactForm from "./ContactForm";
import { motion, AnimatePresence } from "framer-motion";

const ContactDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // For resetting the form
  } = useForm();

  const [isLoading, setIsLoading] = useState(false); // Add loading state

  function submitMessage(formData) {
    console.log(formData);
    setIsLoading(true); // Start loading
    emailjs
      .send(
        "service_n6q10gl", // Replace with your service ID
        "template_f1c5qpa", // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "dD9eetgZcvb73eB56" // Replace with your user ID
      )
      .then((response) => {
        alert("Message sent successfully!");
        reset(); // Reset the form
      })
      .catch((error) => {
        alert("Failed to send the message, please try again.");
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  }

  return (
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
      <motion.h1
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-10vw" }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-3xl text-yellow-200 pb-3"
      >
        Get in Touch
      </motion.h1>
      <motion.hr
        initial={{ opacity: 0, x: "-50vw" }}
        animate={{ opacity: 1, x: "0vw" }}
        exit={{ opacity: 0, duration: "0" }}
        transition={{
          duration: 1,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"
      />
      <motion.p
        initial={{ opacity: 0, x: "-10vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-10vw" }}
        transition={{
          duration: 0.5,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="italic text-md text-gray-500 p-2"
      >
        Thank you for taking the time exploring my portfolio! If you have
        inquiries, or simply wish to connect, I would love to hear from you.
        Please don't hesitate to reach out. I'm eager to connect with you.
      </motion.p>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] lg:grid-rows-1 pt-5 md:grid-cols-[1fr_2fr] gap-6">
  <motion.div
    initial={{ opacity: 0, x: "-10vw" }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: "-10vw" }}
    transition={{
      duration: 0.7,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    className="p-4 lg:p-6"
  >
    <div className="mb-6">
      <p className="flex items-center gap-2 mb-4">
        <EmailIcon className="text-yellow-200" />
        <KeyboardDoubleArrowRightIcon className="text-white" />
        <span className="text-gray-300 text-sm sm:text-base">leianmykecastillo@gmail.com</span>
      </p>
      <p className="flex items-center gap-2">
        <LocationOnIcon className="text-yellow-200" />
        <KeyboardDoubleArrowRightIcon className="text-white" />
        <span className="text-gray-300 text-sm sm:text-base">Tanauan, Batangas</span>
      </p>
      <p className="flex items-center gap-2">
        <a
          href="https://www.linkedin.com/in/leian-myke-castillo-419713239/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block pt-5 text-gray-400 hover:text-yellow-200 transition duration-300"
        >
          <LinkedInIcon fontSize="large" className="text-sm sm:text-base" />
        </a>
      </p>
    </div>
  </motion.div>
  <ContactForm
    handleSubmit={handleSubmit}
    submitMessage={submitMessage}
    register={register}
    isLoading={isLoading}
  />
</div>

    </motion.div>
  );
};

export default ContactDetails;
