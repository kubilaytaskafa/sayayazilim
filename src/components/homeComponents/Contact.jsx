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
  const message = `Merhaba,
Saya Yazılım’ın web, mobil ve özel yazılım geliştirme hizmetleri hakkında bilgi almak isterim.
Uygun olduğunuzda geri dönüş yaparsanız sevinirim.
Şimdiden teşekkür ederim.`;
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
          <div className="flex flex-row items-center gap-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.01919319147!2d30.6821681!3d36.915128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38fc0e9ef95cb%3A0x9f25916bcd3769ec!2zWcO8a3NhcsSxayBNYWhhbGxlc2kgSGFsaSBFZmVuZGlrIFNvayBTdGVz!5e0!3m2!1str!2str!4v1693984355157!5m2!1str!2str"
              className=" w-80 h-60 shadow-md shadow-main rounded-md  lg:w-96  lg:h-72"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
