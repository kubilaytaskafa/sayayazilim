import React, { useState, useEffect } from "react";
import Logo from "../../images/saya-logo.webp";

const Loading = () => {
  const text = "Yükleniyor...";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 150; // silme ve yazma hızı
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayedText(text.substring(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) setDeleting(true);
      } else {
        setDisplayedText(text.substring(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, deleting, text]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src={Logo} alt="Logo" className="w-24 h-24 mb-4 animate-bounce" />
      <h1 className="text-2xl font-semibold text-main">{displayedText}</h1>
    </div>
  );
};

export default Loading;
