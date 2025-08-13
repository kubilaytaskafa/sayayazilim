import React from "react";

const Button = ({ children, link }) => {
  return (
    <button className="py-4 px-8 rounded bg-button text-secondary font-semibold shadow-md shadow-main hover:shadow-lg hover:scale-105  transition duration-300">
      <a href={link}>{children}</a>
    </button>
  );
};

export default Button;
