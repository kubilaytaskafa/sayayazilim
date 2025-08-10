import { article } from "framer-motion/client";
import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { LuServerCog } from "react-icons/lu";
const Service = () => {
  const services = [
    {
      id: 1,
      title: "Web Geliştirme",
      description: "Modern ve Responsive Web Siteleri Geliştiriyoruz.",
      icon: <FaHtml5 />,
    },
    {
      id: 2,
      title: "Mobil Uygulama",
      description: "IOS Ve Android İçin Navite Uygulamalar Geliştiriyoruz.",
      icon: <IoPhonePortraitOutline />,
    },
    {
      id: 3,
      title: "Özel Yazılım Çözümleri",
      description: "Özel yazılım çözümleri ve danışmanlık hizmeti sunuyoruz.",
      icon: <FaServer />,
    },
    {
      id: 4,
      title: "Kurumsal Yazılım Destekleri",
      description:
        "Türkiye`nin dört bir yanında kurumsal firmalara destek veriyoruz",
      icon: <LuServerCog />,
    },
  ];
  return (
    <>
      {services &&
        services.map((service) => {
          return (
            <div
              key={service.id}
              className="flex-col  border border-gray-300 rounded-lg p-4 w-72 lg:w-96 h-50 text-center flex items-center justify-center gap-4 shadow-xl shadow-gray hover:scale-105 transition duration-300 mt-2 "
            >
              <span className="text-4xl text-main hover:rotate-12 transition duration-300">
                {service.icon}
              </span>
              <h3 className=" text-md lg:text-2xl font-bold text-main font- ">
                {service.title}
              </h3>
              <p className=" text-sm lg:text-lg text-gray-700 ">
                {service.description}
              </p>
            </div>
          );
        })}
    </>
  );
};

export default Service;
