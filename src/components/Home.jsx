import React from 'react';
import Typewriter from 'typewriter-effect';
import { PhoneDisplay } from './PhoneDisplay';

export default function Home() {
  const strings = [
    'Hello World!',
    'My name is Alyssa Jackson.',
    'I am a full-stack developer.',
    'I am also a UI/UX designer!',
  ];
  return (
    <div className="w-[100%]">
      <div className="w-[100%] relative flex justify-center items-center h-[100vh] lg:h-[75vh] xl:h-[100vh] 2xl:h-[80vh] overflow-hidden bg-black-light">
        <img
          src="https://res.cloudinary.com/dwbqzx4rr/image/upload/v1632279496/Portfolio/jessy-smith-zFOm6KzA-7g-unsplash_a7sa9j_2_njc0iv.jpg"
          className="object-cover object-center min-w-[100%] absolute top-0 min-h-[100%] hidden lg:block"
        />
        <div className="absolute top-0 w-[100%] hidden sm:flex justify-center items-center lg:hidden h-[calc(100vh-55px)]">
          <img
            src="https://res.cloudinary.com/dwbqzx4rr/image/upload/v1632279074/Portfolio/kelly-sikkema-4xHgz_ZllQs-unsplash_3_rjwww3.jpg"
            className="object-contain object-center min-w-[100%] min-h-[100%]"
          />
        </div>
        <div className="object-cover object-center min-w-[100%] absolute top-0 min-h-[100%] flex justify-center items-center sm:hidden z-[5]">
          <PhoneDisplay />
        </div>

        <div className="text-body-md sm:text-body-lg lg:text-heading-sm text-white-normal text-center z-[10] font-mono font-[300]">
          <Typewriter
            options={{
              strings: strings,
              delay: 50,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
