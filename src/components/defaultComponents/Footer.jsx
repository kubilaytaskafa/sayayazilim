import React from "react";
import Logo from "../../images/saya-logo.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center flex-col  bg-footer">
      <section className="flex w-full items-center justify-between flex-col lg:flex-row  bg-footer gap-6 p-8 lg:px-20 ">
        <article className="w-40 h-40 flex items-center justify-center">
          <img src={Logo} alt="Saya Yazılım Logosu" />
        </article>
        {/* Kurumsal Section */}
        <article className="flex- items-center justify-center gap-12 flex-col text-center">
          <h4 className="text-xl font-bold text-white">Kurumsal</h4>
          <nav className="flex items-center justify-center">
            <ul className="flex items-center justify-center gap-2 flex-col text-white text-sm ">
              <li className=" hover:text-main transition duration-300">
                <a href="/about">Hakkımızda</a>
              </li>
              <li className=" hover:text-main transition duration-300">
                <a href="/mission">Misyon & Vizyon</a>
              </li>
              <li className=" hover:text-main transition duration-300">
                <a href="/team">Ekibimiz</a>
              </li>
            </ul>
          </nav>
        </article>
        <article className="flex- items-center justify-center gap-6 flex-col text-center ">
          <h4 className="text-xl font-bold text-white mb-2">Referanslar</h4>
          <nav className="flex items-center justify-center">
            <ul className="flex items-center justify-center gap-4 flex-col text-center text-sm">
              <li className="text-semibold text-white hover:text-main">
                <a href="/testimonials">Müşteri Yorumları</a>
              </li>
              <li className="text-semibold text-white hover:text-main">
                <a href="/projects">Projelerimiz</a>
              </li>
            </ul>
          </nav>
        </article>
        <article className="flex- items-center justify-center gap-6 flex-col text-center ">
          <h4 className="text-xl font-bold text-white mb-2">Sosyal Medya</h4>
          <nav className="flex items-center justify-center">
            <ul className="flex items-center justify-center gap-4  text-center text-sm">
              <li className="text-semibold text-white hover:text-main">
                <a href="/testimonials">
                  <FaLinkedin className="text-2xl text-white hover:rotate-8 hover:text-main transition duration-300 " />
                </a>
              </li>
              <li className="text-semibold text-white hover:text-main">
                <a href="/projects">
                  <FaSquareXTwitter className="text-2xl text-white hover:rotate-8 hover:text-main transition duration-300 " />
                </a>
              </li>
              <li className="text-semibold text-white hover:text-main">
                <a href="/projects">
                  <FaInstagram className="text-2xl text-white hover:rotate-8 hover:text-main transition duration-300 " />
                </a>
              </li>
            </ul>
          </nav>
        </article>
        {/* sosyal medya */}
      </section>
      <section className="flex items-center justify-center py-4 border-t border-white w-full">
        <p className="text-md text-white">
          © 2025{" "}
          <a
            href="https://www.linkedin.com/company/saya-yaz%C4%B1l%C4%B1m/"
            className="text-main hover:scale-110 transition duration-300 cursor-pointer"
          >
            Saya Yazılım
          </a>{" "}
          . Tüm hakları saklıdır.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
