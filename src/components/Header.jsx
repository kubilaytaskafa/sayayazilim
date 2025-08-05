import React, { useState } from "react";
import Logo from "../images/saya-logo.webp";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const openHandler = () => {
    setIsOpen((prev) => !prev);
    setOpenSubmenu(null); // Menü kapatıldığında alt menüler de kapansın
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenu((prev) => (prev === name ? null : name));
  };

  return (
    <header className="flex items-center justify-between py-2 px-12 lg:px-16 bg-secondary border-b border-gray-200 font-main shadow-xl shadow-gray w-full  sticky top-0 z-50">
      <a href="/">
        <img src={Logo} alt="Logo" className="w-24 lg:w-20" />
      </a>

      {/* MASAÜSTÜ MENÜ */}
      <nav className="hidden lg:flex">
        <ul className="flex items-center justify-center gap-6 relative">
          <li className="font-semibold hover:text-main transition duration-300 cursor-pointer">
            <a href="/">Anasayfa</a>
          </li>
          <li className="font-semibold hover:text-main transition duration-300 cursor-pointer">
            <a href="/#services"> Hizmetlerimiz</a>
          </li>
          <li className="font-semibold hover:text-main transition duration-300 cursor-pointer">
            <a href="/#projects"> Projelerimiz</a>
          </li>

          {/* Kurumsal - Masaüstü */}
          <li className="relative">
            <button
              onClick={() => toggleSubmenu("kurumsal")}
              className={` font-semibold transition duration-300 cursor-pointer ${
                openSubmenu === "kurumsal" ? "bg-main text-secondary" : ""
              } p-2 rounded-lg`}
            >
              Kurumsal
            </button>
            {openSubmenu === "kurumsal" && (
              <ul className="absolute top-full left-0 mt-2 bg-secondary  rounded-xl shadow-xl   min-w-[180px] z-50">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Hakkımızda
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Misyonumuz
                </li>
                <li className="px-4 py-2 hover:text-main cursor-pointer">
                  Vizyonumuz
                </li>
              </ul>
            )}
          </li>

          {/* Referanslar - Masaüstü */}
          <li className="relative">
            <button
              onClick={() => toggleSubmenu("referanslar")}
              className={` font-semibold transition duration-300 cursor-pointer ${
                openSubmenu === "referanslar" ? "bg-main text-secondary" : ""
              } p-2 rounded-lg`}
            >
              Referanslar
            </button>
            {openSubmenu === "referanslar" && (
              <ul className="absolute top-full right-0 mt-2 bg-secondary  rounded-xl shadow-md text-gray-800 min-w-[180px] z-50 text-center flex items-center flex-col gap-2">
                <li className="px-4 py-2 hover:text-main cursor-pointer">
                  Müşteri Yorumları
                </li>
                <li className="px-4 py-2 hover:text-main  cursor-pointer">
                  Tamamlanan Projeler
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* MENU ICON (MOBİL) */}
      {isOpen ? (
        <IoMdClose
          className="text-3xl cursor-pointer hover:text-main lg:hidden transition duration-300"
          onClick={openHandler}
        />
      ) : (
        <CiMenuFries
          className="text-3xl cursor-pointer hover:text-main lg:hidden transition duration-300"
          onClick={openHandler}
        />
      )}

      {/* MOBİL MENÜ */}
      {isOpen && (
        <nav className="flex flex-col items-start justify-start gap-6 p-8 lg:hidden absolute top-0 left-0 w-1/2 md:w-1/3 h-screen bg-secondary z-50 border-r border-gray-600 shadow-xl shadow-gray  rounded-r-2xl overflow-y-auto">
          <ul className="flex flex-col items-start justify-start gap-4 w-full">
            <li
              className="font-semibold hover:text-main transition duration-300 cursor-pointer"
              onClick={openHandler}
            >
              <a href="#hero">Anasayfa</a>
            </li>
            <li
              className="font-semibold hover:text-main transition duration-300 cursor-pointer"
              onClick={openHandler}
            >
              <a href="#services">Hizmetlerimiz</a>
            </li>
            <li
              className="font-semibold hover:text-main transition duration-300 cursor-pointer"
              onClick={openHandler}
            >
              <a href="#projects">Projelerimiz</a>
            </li>

            {/* Kurumsal - Mobil */}
            <li
              className="font-semibold hover:text-main transition duration-300 cursor-pointer w-full"
              onClick={() => toggleSubmenu("kurumsal")}
            >
              Kurumsal
            </li>
            {openSubmenu === "kurumsal" && (
              <ul className="ml-4 flex flex-col gap-2 text-sm ">
                <li
                  className="cursor-pointer hover:text-main"
                  onClick={openHandler}
                >
                  <a href="/about">Hakkımızda</a>
                </li>
                <li
                  className="cursor-pointer hover:text-main"
                  onClick={openHandler}
                >
                  Misyon & Vizyon
                </li>
                <li
                  className="cursor-pointer hover:text-main"
                  onClick={openHandler}
                >
                  Ekibimiz
                </li>
              </ul>
            )}

            {/* Referanslar - Mobil */}
            <li
              className="font-semibold hover:text-main transition duration-300 cursor-pointer w-full"
              onClick={() => toggleSubmenu("referanslar")}
            >
              Referanslar
            </li>
            {openSubmenu === "referanslar" && (
              <ul className="ml-4 flex flex-col gap-2 text-sm max-w-[90%] overflow-x-auto">
                <li
                  className="cursor-pointer hover:text-main"
                  onClick={openHandler}
                >
                  Kimlerle Çalıştık?
                </li>
                <li
                  className="cursor-pointer hover:text-main"
                  onClick={openHandler}
                >
                  Projelerimiz
                </li>
              </ul>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
