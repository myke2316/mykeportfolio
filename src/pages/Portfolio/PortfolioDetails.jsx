import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";
import homecodecraft from "./images/homecodecraft.png";
import aboutcodecraft from "./images/aboutcodecraft.png";
import carrental from "./images/carrental.png";
import worldwise1 from "./images/worldwise1.png";
import worldwise from "./images/worldwise.png";
const portfolio = [
  {
    images: [homecodecraft, aboutcodecraft],
    name: "CodeCraft",
    details:
      "CodeCraft is an E-Learning platform made for BSU Malvar, that has interactive courses/lessons with quizzes and coding activities. It also features a dashboard to track and monitor each student's performance.",
    language: ["React", "MongoDB", "NodeJS", "ExpressJS", "Tailwind", "MUI"],
    github: "",
    preview: "https://codecrafts.online",
  },
  {
    images: [carrental],
    name: "DriveWise",
    details:
      "This  is a car rental web based system designed for users to browse, book, and manage car rentals efficiently. It features search functionality for cars by location, type, and availability.",
    language: ["HTML", "CSS", "PHP"],
    github: "https://github.com/myke2316/DriveWise",
  },
  {
    images: [worldwise, worldwise1],
    name: "WorldWise",
    details:
      "WorldWise is an interactive map app that lets you pin your travels and showcase your adventures to the world. This is made for practice purposes only.",
    language: ["React", "CSS", "HTML"],
    github: "https://github.com/myke2316/WorldWise",
  },
];

const PortfolioItem = ({ item }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [item.images.length]);

  return (
    <div className="bg-zinc-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className="relative group">
        <img
          src={item.images[currentImageIndex]}
          alt={`${item.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-t-lg">
          <p className="text-white text-sm px-4 py-2 overflow-y-auto max-h-full">
            {item.details}
          </p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-yellow-200 mb-2">
          {item.name}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {item.language.map((tool, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-zinc-700 text-white rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-400 transition-colors duration-200"
            >
              <GitHubIcon fontSize="medium" />
            </a>
          )}
          {item.preview && (
            <a
              href={item.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-400 transition-colors duration-200"
            >
              <PreviewIcon fontSize="medium" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const PortfolioDetails = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map((item, index) => (
          <PortfolioItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetails;
