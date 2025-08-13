import React from "react";
import ahmetAyas from "../../images/ahmetayas.webp";
import kubilayTaskafa from "../../images/kubilaytaskafa.webp";
import enesBattalOk from "../../images/enesbattalok.webp";
import leventKok from "../../images/leventkok.webp";
import { FaLinkedin } from "react-icons/fa6";
const Employee = () => {
  const employees = [
    {
      id: 1,
      name: "Ahmet Ayas",
      department: "Proje Yöneticisi",
      image: ahmetAyas,
      socialMedia: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/ahmet-ayas-915aa739/",
        },
      },
    },
    {
      id: 2,
      name: "Kubilay Taşkafa",
      department: "Yazılım Geliştirici",
      image: kubilayTaskafa,
      socialMedia: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/kubilaytaskafa/",
        },
      },
    },
    {
      id: 3,
      name: "Enes Battal Ok",
      department: "Yazılım Geliştirici",
      image: enesBattalOk,
      socialMedia: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/enes-battal-ok-634a0a230/",
        },
      },
    },
    {
      id: 4,
      name: "Levent Kök",
      department: "Yazılım Geliştirici",
      image: leventKok,
      socialMedia: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/leventkok/",
        },
      },
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="flex flex-col w-full sm:w-80 md:w-96 h-[20rem]] bg-white border border-gray-300 shadow-md shadow-main hover:shadow-lg transition-shadow duration-300 p-8 rounded-lg"
        >
          {/* Resim Alanı */}
          <div className="w-full h-96">
            <img
              src={employee.image}
              alt={`${employee.name}-${employee.department}`}
              className="w-full h-full object-cover rounded-lg "
              loading="lazy"
            />
          </div>

          {/* Bilgi Alanı */}
          <div className="flex flex-col items-center text-center p-4 gap-2">
            <h3 className="text-lg font-bold text-gray-900">{employee.name}</h3>
            <p className="text-sm font-semibold text-gray-600">
              {employee.department}
            </p>
            <div className="flex items-center justify-center gap-2 ">
              <a
                href={employee.socialMedia.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-main text-3xl hover:rotate-6 transition duration-300 "
              >
                {employee.socialMedia.linkedin.icon}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employee;
