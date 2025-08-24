import React from "react";
import Logo from "../images/saya-logo.webp";
const AdminPanel = () => {
  return (
    <>
      <header className="flex items-start justify-start py-2 px-12 lg:px-8 bg-secondary border-b border-gray-200 font-main shadow-xl shadow-gray w-full  sticky top-0 z-50">
        <div className="flex items-center justify-center gap-12">
          <h1 className=" text-md 0 lg:text-xl font-semibold text-main">
            Saya Yazılım-Admin Panel
          </h1>
          <img src={Logo} alt="Saya Yazılım Logo" className="w-24" />
        </div>
      </header>
    </>
  );
};

export default AdminPanel;
