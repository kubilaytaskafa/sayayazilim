import React from "react";

const Statistics = () => {
  const statistics = [
    {
      id: 1,
      static: "100+",
      description: "Tamamlanan Proje",
    },
    {
      id: 2,
      static: "50+",
      description: "Mutlu Müşteri",
    },
    {
      id: 3,
      static: "20+",
      description: "Yıllık Deneyim",
    },
  ];
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row gap-6 lg:gap-32 mt-12">
      {statistics &&
        statistics.map((item) => {
          return (
            <div
              className="flex items-center justify-center flex-col gap-4"
              key={item.id}
            >
              <h3 className="text-4xl font-bold font-main text-main hover:rotate-6 hover:scale-110 transition duration-300">
                {item.static}
              </h3>
              <p>{item.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Statistics;
