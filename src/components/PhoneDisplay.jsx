import React from 'react';

export const PhoneDisplay = () => {
  return (
    <div className="overflow-hidden w-[300px] flex justify-center h-[595px] rounded-3xl relative">
      <div className="rounded-3xl w-[275px] h-[590px] overflow-hidden bg-[#000000]"></div>
      <div className="absolute z-1 top-[0] left-[0] w-[300px] h-[595px]">
        <img src="/phone.png" alt="phone case" width="300px" height="595px" loading="eager" />
      </div>
    </div>
  );
};
