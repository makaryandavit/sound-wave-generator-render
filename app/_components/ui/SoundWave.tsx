"use client";

import React, { JSXElementConstructor, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SoundWave = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex gap-[2px] w-[81%] translate-y-[17px] translate-x-[25px] tablet:translate-y-[27px]">
        {Array.from({ length: 90 }).map((item, index) => (
          <span
            key={index}
            className="w-[3px] h-[30px] bg-white block soundWave"
            style={{
              animationDuration: `${0.7 + Math.random() * (1.5 - 0.7)}s`,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SoundWave;
