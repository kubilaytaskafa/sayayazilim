import React, { useState } from "react";
import Logo from "../../images/saya-logo.webp";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
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
            <Link smooth to="/#services">
              Hizmetlerimiz
            </Link>
          </li>
          <li className="font-semibold hover:text-main transition duration-300 cursor-pointer">
            <Link smooth to="/#projects">
              Projelerimiz
            </Link>
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
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-main transition duration-300 cursor-pointer">
                  <Link to={"/about"}>Hakkımızda</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-main transition duration-300">
                  <Link to={"/mission-vision"}>Misyonumuz & Vizyonumuz</Link>
                </li>
                <li className="px-4 py-2  cursor-pointer hover:text-main transition duration-300">
                  <Link to={"/team"}>Ekibimiz</Link>
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
                <li className="px-4 py-2 hover:text-main cursor-pointer transition duration-300">
                  <Link to={"/"}>Müşteri Yorumları</Link>
                </li>
                <li className="px-4 py-2 hover:text-main  cursor-pointer transition duration-300">
                  <Link to={"/projects"}>Projelerimiz</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="font-semibold hover:text-main transition duration-300 cursor-pointer">
            <Link smooth to="/#contact">
              İletişim
            </Link>
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
        <motion.nav
          initial={{ opacity: 1, x: -100 }} // Soldan ve yukarıdan başlasın
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          exit={{ opacity: 0, x: -100 }}
          className="flex flex-col items-center justify-between gap-6 px-4 text-left lg:hidden absolute top-0 left-0 w-1/2 text-sm md:w-1/4   h-[600px] border rounded-r-xl  bg-secondary z-50 text-gray-800 py-4 border-gray-300 shadow-md shadow-main overflow-y-auto"
        >
          <ul className="flex flex-col items-start justify-start gap-4 w-full px-4">
            <li
              className="font-semibold hover:text-main transition duration-300 cursor-pointer"
              onClick={openHandler}
            >
              <a href="/">Anasayfa</a>
            </li>
            <li
              className="font-semibold hover:text-main transition duration-300 cursor-pointer"
              onClick={openHandler}
            >
              <Link smooth to="/#services">
                Hizmetlerimiz
              </Link>
            </li>
            <li
              className="font-semibold hover:text-main transition duration-300 cursor-pointer"
              onClick={openHandler}
            >
              <Link smooth to="/#projects">
                Projelerimiz
              </Link>
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
                  <Link to="/about">Hakkımızda</Link>
                </li>
                <li
                  className="cursor-pointer hover:text-main"
                  onClick={openHandler}
                >
                  <Link to="/mission-vision">Misyon & Vizyon</Link>
                </li>
                <li
                  className="cursor-pointer hover:text-main"
                  onClick={openHandler}
                >
                  <Link to="/team">Ekibimiz</Link>
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
                  <a href="/">Müşteri Yorumları</a>
                </li>
                <li
                  className="cursor-pointer hover:text-main"
                  onClick={openHandler}
                >
                  <Link to={"/projects"}>Projelerimiz</Link>
                </li>
              </ul>
            )}
            <li
              className="font-semibold hover:text-main transition duration-300 cursor-pointer"
              onClick={openHandler}
            >
              <Link smooth to="/#contact">
                İletişim
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-4">
            <img src={Logo} alt="Saya Yazılım Logosu" className="w-22" />
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
