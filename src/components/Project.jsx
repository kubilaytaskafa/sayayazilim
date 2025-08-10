import React from "react";
import { useSelector } from "react-redux";
const Project = () => {
  const projects = useSelector((state) => state.projects.projects);
  console.log(projects);
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-2 text-center w-72 h-60 rounded-md border border-gray-500 shadow-md shadow-main p-8  hover:scale-105 transition duration-300">
        <h1 className=" lg:text-md font-bold text-main">{projects[0].title}</h1>
        <p className="text-sm font-semibold text-gray-600 ">
          {projects[0].description}
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2 text-center w-72 h-60 rounded-md border border-gray-500 shadow-md shadow-main p-8  hover:scale-105 transition duration-300">
        <h1 className=" lg:text-md font-bold text-main">{projects[1].title}</h1>
        <p className="text-sm font-semibold text-gray-600 ">
          {projects[1].description}
        </p>
      </div>
      <div className="flex items-center justify-center flex-col gap-2 text-center w-72 h-60 rounded-md border border-gray-500 shadow-md shadow-main p-8  hover:scale-105 transition duration-300">
        <h1 className="text-md font-bold text-main">{projects[7].title}</h1>
        <p className="text-sm font-semibold text-gray-600 ">
          {projects[7].description}
        </p>
      </div>
    </>
  );
};

export default Project;
