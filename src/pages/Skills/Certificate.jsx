import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const certificate = [
  {
    title: "Information Technology Passport Examination",
    date: "2024",
  },
  {
    title: "The complete web development bootcamp",
    date: "2022-2023",
    link: "/portfolio/images/webdevcert.pdf",
  },
  {
    title: "The Ultimate React Course: React, Redux & More - Udemy",
    date: "2023-2024",
    link: "/portfolio/images/reactcert.pdf",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Page animation variants
const pageVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    transition: { duration: 0.3 },
  }),
};

const Certificate = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(certificate.length / itemsPerPage);

  const currentCertificates = certificate.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleNextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePreviousPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleOpenPDF = (cert) => {
    window.open(cert, "_blank", "noopener,noreferrer");
  };
  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5"
        >
          {currentCertificates.map((cert, index) => (
            <motion.div
              key={index}
              className="items-center justify-center p-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-white mb-2 hover:text-yellow-200">
                {cert.title}
              </h3>
              <p className="text-gray-400 mb-2">{cert.date}</p>

              {cert.link &&
         
                  <div key={certificate.id}>
                    <a
                      onClick={() => handleOpenPDF(cert.link)}
                      className="text-blue-400 hover:underline"
                      href="#"
                    >
                      View Certificate {certificate.id}
                    </a>
                  </div>
                }
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePreviousPage}
          className="p-2 text-white rounded-lg hover:text-gray-600"
        >
          <KeyboardArrowLeftIcon />
        </button>
        <span className="text-white">
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="p-2 text-white rounded-lg hover:text-gray-600"
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </motion.div>
  );
};

export default Certificate;
