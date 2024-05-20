import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-500 text-white p-4 text-center font-roboto font-bold">
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
