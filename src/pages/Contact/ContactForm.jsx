import { motion } from "framer-motion";

const ContactForm = ({ handleSubmit, submitMessage, register, isLoading }) => {
  return (
    <motion.form
      // Motion props for animation
      initial={{ opacity: 0, x: "-10vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      exit={{ opacity: 0, x: "-10vw" }}
      className="grid gap-4 rounded-lg shadow-lg"
      onSubmit={handleSubmit((data) => {
        submitMessage(data);
      })}
    >
      <input
        className="p-4 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
        type="text"
        placeholder="Your Name"
        {...register("name", { required: true })}
      />

      <input
        className="p-4 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
        type="email"
        placeholder="Your Email"
        {...register("email", { required: true })}
      />

      <textarea
        className="p-4 rounded-md border border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
        placeholder="Your Message"
        rows="5"
        {...register("message", { required: true })}
      ></textarea>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 rounded-md text-gray-900 font-semibold ${
          isLoading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-yellow-200 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300"
        }`}
      >
        {isLoading ? "Sending..." : "Submit"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
