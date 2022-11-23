import { React, useEffect, useState } from 'react';
import SkillChart from './SkillChart';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [skills, inView] = useInView({
    threshold: 0.1,
  });
  const [animations, setAnimations] = useState(inView);

  const handleScroll = () => {
    if (window.scrollY < 1000) {
      inView ? setAnimations(true) : setAnimations(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="flex flex-col w-[100%] max-w-[1512px] md:px-8">
      <div className="flex md:space-x-4">
        <div className="hidden md:flex flex-col md:w-[200px] lg:w-[280px] xl:w-[300px] py-4 relative">
          <img
            src="./about-1.png"
            alt="profile"
            className="w-[100%] rounded-tl-3xl rounded-br-3xl z-[5] my-16"
          />

          <img
            src="./about-2.jpeg"
            alt="backpacking with my dog"
            width="300px"
            className="w-[100%] rounded-tl-3xl rounded-br-3xl z-[5] my-16"
          />
          <div className="absolute top-0 left-0 right-0 h-[100%] w-[100%] flex justify-center items-center">
            <div className="w-[2px] h-[100%] bg-white-dark"></div>
          </div>
        </div>
        <div className="flex flex-col items-start px-4 py-8 w-[100%] md:w-[500px] lg:w-[700px] xl:w-[1200px] overflow-hidden">
          <h2 className="text-heading-md font-serif lg:ml-16 mb-4 lg:mb-8">About</h2>
          <div className="lg:ml-16 text-body-lg mb-4">
            I’m a Software Developer and UI/UX Designer for a startup called ARKH. I have a passion
            for UI animations and an interactive user experience. I love finding elegant solutions
            that balance simplicity, performance, and extensibility.
          </div>
          <img
            src="./about-1.png"
            alt="profile"
            className="w-[100%] max-w-[350px] rounded-tl-3xl rounded-br-3xl z-[5] my-4 block md:hidden"
          />

          <div className="lg:ml-16 text-body-lg mb-4">
            <span>Random facts:</span>
            <ul className="list-disc ml-8">
              <li>I have a Golden Retriver/Irish Setter named River.</li>
              <li>I run half marathons.</li>
              <li>The Office is one of my favorite TV shows.</li>
              <li>I code in my free time.</li>
            </ul>
          </div>

          <img
            src="./about-2.jpeg"
            alt="backpacking with my dog"
            className="w-[100%] max-w-[350px] rounded-tl-3xl rounded-br-3xl z-[5] my-4 block md:hidden"
          />

          <div ref={skills} className="mt-8">
            {animations && <SkillChart />}
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line"></div>
      </div>
    </div>
  );
}
