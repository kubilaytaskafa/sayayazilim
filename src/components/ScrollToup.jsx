import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToUp = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;

      setScrollPercent(scrollProgress);
      setShowButton(scrollTop > 300); // 300px sonra butonu göster
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circleRadius = 28;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    showButton && (
      <button
        aria-label="Sayfanın en üstüne çık"
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-50 group"
      >
        <div className="relative w-16 h-16">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 70 70"
            className="rotate-[-90deg]"
          >
            <circle
              cx="35"
              cy="35"
              r={circleRadius}
              stroke="#ddd"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="35"
              cy="35"
              r={circleRadius}
              stroke="#6840fe"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-main text-white p-3 rounded-full shadow-lg transition duration-300 group-hover:scale-110">
            <FaArrowUp size={20} />
          </div>
        </div>
      </button>
    )
  );
};

export default ScrollToUp;
