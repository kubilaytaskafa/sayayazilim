import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../defaultComponents/ContactForm";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  // ! whatsapp message template
  const message = `Merhaba, Saya Yazılım ile ilgili bilgi almak istiyorum.
Özellikle [web sitesi / mobil uygulama / özel yazılım] geliştirme hizmetiniz hakkında detay verebilir misiniz?
Müsait olduğunuzda dönüş yaparsanız sevinirim.
Teşekkürler.`;
  const encodedMessage = encodeURIComponent(message);
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

  return (
    <section
      id="contact"
      ref={ref}
      className="flex flex-col items-center gap-12 w-full mt-20 scroll-mt-40 lg:scroll-mt-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-[700] text-2xl  lg:text-4xl font-main text-shadow-xs text-shadow-main"
      >
        Bizimle İletişime Geçin
      </motion.h2>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col lg:flex-row items-start justify-between gap-12 w-full mb-12 px-6 lg:px-20"
      >
        {/* İletişim Bilgileri */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 px-4 lg:px-0 items-center lg:items-start">
          <h3 className="font-bold text-xl text-main text-center lg:text-left mb-4">
            İletişim Bilgileri
          </h3>

          <div className="flex flex-row items-center gap-2 text-center">
            <FaLocationDot className="text-xl text-main flex-shrink-0" />
            <a
              href="https://www.google.com/maps/place/%C3%96zg%C3%BCrl%C3%BCk,+Yahya+Kemal+Cad.+No:98,+07025+Kepez%2FAntalya/@36.915128,30.6821681,17z/data=!3m1!4b1!4m6!3m5!1s0x14c38fc0e9ef95cb:0x9f25916bcd3769ec!8m2!3d36.915128!4d30.684743!16s%2Fg%2F11c2h2f4tj?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
              className="font-semibold text-sm lg:text-md text-gray-600 hover:text-main transition duration-300"
            >
              Özgürlük Mah. Yahya Kemal Cad. No:98/A Kepez / ANTALYA
            </a>
          </div>

          <div className="flex flex-row items-center gap-2 text-center">
            <FaPhoneAlt className="text-xl text-main flex-shrink-0" />
            <a
              href="tel:+905419724041"
              className="font-semibold text-md text-gray-600 hover:text-main transition duration-300"
            >
              +90 541 972 40 41
            </a>
          </div>

          <div className="flex flex-row items-center gap-2">
            <IoIosMail className="text-xl text-main flex-shrink-0" />
            <a
              href="mailto:sayayazilim@gmail.com"
              className="font-semibold text-md text-gray-600 hover:text-main transition duration-300"
            >
              sayayazilim@gmail.com
            </a>
          </div>

          <div className="flex flex-row items-center gap-2">
            <IoLogoWhatsapp className="text-xl text-main flex-shrink-0" />
            <a
              href={`https://wa.me/905419724041?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-md text-gray-600 hover:text-main transition duration-300"
            >
              +90 541 972 40 41
            </a>
          </div>
        </div>

        {/* İletişim Formu */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2 px-4 lg:px-0 text-center lg:text-left">
          <h3 className="font-bold text-xl text-main text-center mb-4">
            İletişim Formu
          </h3>
          <ContactForm />
        </div>
      </motion.article>
    </section>
  );
};

export default Contact;
