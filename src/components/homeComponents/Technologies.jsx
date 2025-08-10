import React, { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaPython, FaApple } from "react-icons/fa";
import { SiGoogleplay, SiDelphi, SiRadstudio } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";

const technologies = [
  { id: 1, name: "HTML", icon: <FaHtml5 />, color: "#E34C26" },
  { id: 2, name: "Google Play", icon: <SiGoogleplay />, color: "#3DDC84" },
  { id: 3, name: "Python", icon: <FaPython />, color: "#3776AB" },
  { id: 4, name: "Rad Studio", icon: <SiRadstudio />, color: "#EE1F25" },
  { id: 5, name: "React", icon: <FaReact />, color: "#61DBFB" },
  { id: 6, name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
  { id: 7, name: "Delphi", icon: <SiDelphi />, color: "#ED1B2E" },
  { id: 8, name: "Apple Store", icon: <FaApple />, color: "#000000" },
  { id: 9, name: "Javascript", icon: <IoLogoJavascript />, color: "#F0DB4F" },
  {
    id: 10,
    name: "TailwindCSS",
    icon: <RiTailwindCssFill />,
    color: "#61DBFB",
  },
  { id: 11, name: "CSS", icon: <FaCss3 />, color: "#3776AB" },
];

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // İki kez tekrar ediyoruz ki animasyon kesintisiz olsun
  const loopedTechs = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <section
      ref={ref}
      className="flex flex-col items-center gap-12 overflow-hidden bg-secondary py-8 px-4"
    >
      <h2
        className="text-center font-main font-bold text-xl md:text-4xl text-shadow-main text-shadow-2xs"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : "translateY(50px)",
          transition: "all 0.6s ease-out",
        }}
      >
        Birlikte Çalıştığımız Teknolojiler
      </h2>

      <div
        className="flex whitespace-nowrap gap-12 text-5xl md:text-6xl select-none"
        style={{
          animationPlayState: isVisible ? "running" : "paused",
          animation: isVisible ? "marquee 200s linear infinite" : "none",
        }}
      >
        {loopedTechs.map(({ id, name, icon, color }, index) => (
          <div
            key={`${id}-${index}`}
            title={name}
            className="flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:scale-110 hover:rotate-6  transition duration-300"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "";
            }}
          >
            <span>
              {React.cloneElement(icon, {
                color: "currentColor",
              })}
            </span>
            <span className="text-xs mt-1">{name}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;
