import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import XlogImage from "../../images/xlog.webp";
const Xlog = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Sadece bir kez tetiklensin
        }
      },
      { threshold: 0.3 } // %30'u görünürse tetiklenir
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      ref={ref}
      className="w-full flex flex-col items-center justify-center gap-8 mt-20 mb-20 scroll-mt-44 lg:scroll-mt-48"
      id="Xlog"
    >
      <motion.h2 className="font-[700] text-4xl font-main text-shadow-2xs text-shadow-main">
        Xlog Firewall
      </motion.h2>
      <img
        src={XlogImage}
        alt=""
        className="w-1/2 lg:w-1/3 hover:scale-105 transition duration-300 mt-2"
      />
      <p className="p-2 text-sm  font-semibold text-gray-600 lg:text-xl  text-center  lg:p-12">
        Ağınızda oluşabilecek illegal trafiklerin önüne geçebilmek bir derttir
        ve kullanıcılarınızın ağınızda neler yaptığını bilmeden bu kontrolü
        gerçekleştirmek ekstra zaman kaybından başka birşey değildir.
        Kullanıcılarınızın mesai saatlerinde istemediğiniz sitelere ve
        uygulamalara eriştiğini ve aşırı trafik ürettiğini bilmenize rağmen
        bunları engelleyemiyor olabilirsiniz. Ağı kontrol etmenizi ve hem
        zamandan kar etmenizi hem de yönetmenizi kolaylaştıran basit ve güçlü
        bir güvenliğe ihtiyacınız var. XLOG Ağ Güvenlik ve Loglama Sistemi UTM
        Güvenlik Duvarı'nda bunu ve daha fazlasını sunar.{" "}
        <span className="font-bold  text-main">
          Firmamız, XLOG Firewall sistemlerinin yetkili bayisidir. Güvenlik
          odaklı yazılım çözümlerimizin yanı sıra, XLOG Firewall ürünleri ile
          kurumların ağ ve veri güvenliğini en üst seviyeye taşıyoruz. Yetkili
          bayi olarak, müşterilerimize satışın yanı sıra kurulum, teknik destek
          ve danışmanlık hizmetleri de sunuyoruz.
        </span>
      </p>
      <p className=" text-sm flex items-center justify-center gap-2 font-semibold text-gray-600 lg:text-xl   lg:p-12 text-left lg:text-center">
        Detaylı Bilgi İçin
        <a href="https://xlog.com.tr/" className="text-red-600" target="_blank">
          Xlogg Firewall
        </a>
      </p>
    </motion.section>
  );
};

export default Xlog;
