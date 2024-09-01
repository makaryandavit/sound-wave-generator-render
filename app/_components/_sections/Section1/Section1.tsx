import React from "react";
import { Button } from "../../ui";
import Image from "next/image";

const Section1 = () => {
  return <div className="w-[95%] h-auto min-h-[500px] sec1-custom-gradient  mx-auto rounded-[32px] mt-[20px] notebook:flex notebook:justify-center items-center">
    <div className="flex flex-col items-center justify-center gap-4 w-[100%] h-auto min-h-[400px]   notebook:w-[40%] p-[15px] notebook:items-start">
      <p className="text-center text-[#252E48] text-4xl font-bold tablet:text-titleSize leading-none notebook:text-start">Sound Wave <br /> Generator</p>
      <p className="text-center text-[#252E48] max-w-[550px] notebook:text-start">Make your audio flow visually with automatically generated sound waves. Whether you’re a musician looking for a quick music video solution or a content creator thinking of sharing your podcast episode on social media, Renderforest’s online Sound Wave Generator is the solution you need. </p>
      <Button
            className=" text-[15px] w-[200px] h-[45px] rounded-[5px] bg-gradient-to-r from-[#8980F7] to-[#4136C1] text-white cursor-pointer"
            value="Animate Sound Waves"
          />
    </div>
    <div className="w-[100%] h-auto  notebook:w-[45%] flex justify-center p-[15px] items-center flex-col">
      <div className="w-[550px] max-w-[100%]   flex flex-col justify-center items-center">
      <Image src="/images/wave.png" alt="wave" width={450} height={550} className="w-[81%] translate-y-[17px] translate-x-[25px] tablet:translate-y-[27px]"/>
      <Image src="/images/sec1Img.png" alt="videoHelper" width={550} height={350} className="w-[100%] z-10"/>
      </div>
    </div>
  </div>;
};

export default Section1;
