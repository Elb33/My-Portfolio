import React from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <motion.div
      className="border-transparent hover:border-2 border-[#70FF00] rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 bg-black h-full">
        <h3 className="text-xl font-bold font-roboto text-[#70FF00]">
          {title}
        </h3>
        <p className="text-[#fff] font-roboto font-regular">{description}</p>
        <a
          href={projectUrl}
          className="font-roboto font-bold text-gray-500  hover:text-[#70FF00] mt-2 block "
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
