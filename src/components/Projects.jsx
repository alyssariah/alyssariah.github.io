import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('https://opensheet.elk.sh//1rSCXAKx7Pvd_FTYy3JIBdVTJTm-KZongre1eOOFiX9Y/Sheet1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);
  //docs.google.com/spreadsheets/d/e/2PACX-1vQ4HZ0noXL7P4Lmz2FRZM4cupcrPcJs7jSA5CwxPHR7gobfk0R0rU8jSRPe3UUzwSC-jK6og2Od48a3/pubhtml
  return (
    <div className="w-[100%] max-w-[1512px] flex flex-col items-center z-[5]">
      <p className="text-heading-md font-serif">Portfolio</p>
      <div className="flex justify-center flex-wrap">
        {projects.map((project, index) => {
          return (
            <a
              href={project.URL}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="w-[99%] md:w-[49%] lg:w-[32%] h-[250px] md:mr-1 overflow-hidden my-4 flex justify-center items-center relative"
            >
              <div className="w-[100%] absolute top-0 h-[100%] z-[2] bg-hover hover:bg-black-light-active flex flex-col justify-center items-center text-white-light transition-all duration-500">
                <p className="font-serif text-heading-sm text-center mb-2 font-semibold">
                  {project.Title}
                </p>
                <p className="text-center w-[80%] font-sans text-body-md">{project.Description}</p>
              </div>
              <img
                src={project.Image}
                alt="project image"
                width="100%"
                className="object-cover object-center min-h-[100%] min-w-[100%]"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
