import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  const [scrolled, setScrolled] = useState(false);

  // Mesaj
  const message = `Merhaba, Saya Yazılım ile ilgili bilgi almak istiyorum.
Özellikle [web sitesi / mobil uygulama / özel yazılım] geliştirme hizmetiniz hakkında detay verebilir misiniz?
Müsait olduğunuzda dönüş yaparsanız sevinirim.
Teşekkürler.`;
  const encodedMessage = encodeURIComponent(message);

  // Scroll kontrolü
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300); // 200px sonrası buton aşağı kayacak
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/905419724041?text=${encodedMessage}`}
      target="_blank"
      aria-label="WhatsApp ile mesaj gönder"
      className={`fixed right-6 md:right-8 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white transition-transform duration-200 hover:scale-110 z-50
        ${
          scrolled
            ? "bottom-22 md:bottom-26 lg:bottom-28"
            : "bottom-6 md:bottom-8"
        }`}
    >
      <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />
    </a>
  );
};

export default WhatsappIcon;
