import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="w-[95%] tablet:w-[85%] h-auto bg-[#E2D7FF] p-[10px] py-[30px] m-auto rounded-[32px] flex flex-col items-center gap-8 mb-[20px]">
      <p className="text-center text-[#252E48] text-3xl font-bold">
        Main Features of Renderforest’s Sound Wave <br /> Visualizer
      </p>
      <div className="w-[95%] h-auto min-h-[300px] custom-box-shadow rounded-[32px] p-[10px] flex-col customSize:flex customSize:flex-row notebook:w-[70%]">
        <div className="w-full h-auto  order-2 flex pl-[20px] justify-center items-center notebook:justify-end notebook:pr-[20px]">
          <Image src="/images/nkar1.png" alt="" width={400} height={100} />
        </div>
        <div className="w-full h-auto order-1 p-[15px] pl-[20px] flex flex-col justify-center gap-[10px]">
          <p className="text-[#252E48] w-[90%] text-xl montserrat notebook:text-2xl">
            Large Library of Sound Wave Template
          </p>
          <p className="text-[#252E48] text-base">
            Each music and audio project has its own ambiance. With the huge
            library of templates to choose from, our Sound Wave Generator lets
            you find and customize a soundwave animation that matches your
            project’s unique style.
          </p>
        </div>
      </div>

      <div className="w-[95%] h-auto min-h-[300px] custom-box-shadow rounded-[32px] p-[10px] flex-col customSize:flex customSize:flex-row notebook:w-[70%]">
        <div className="w-full h-auto  order-1 flex tablet:pl-[20px] justify-center items-center notebook:justify-start notebook:pl-[20px]">
          <Image src="/images/nkar2.png" alt="" width={400} height={100} />
        </div>
        <div className="w-full h-auto order-2 p-[15px] pl-[20px] flex flex-col justify-center gap-[10px]">
          <p className="text-[#252E48] w-[90%] text-xl montserrat notebook:text-2xl">
            Customizable Sound Waves
          </p>
          <p className="text-[#252E48] text-base">
            Our waveform visualizer offers a toolkit of customization options to
            make your video stand out. Create one-of-a-kind sound wave
            animations that help you visualize what you could only imagine
            before.
          </p>
        </div>
      </div>

      <div className="w-[95%] h-auto min-h-[300px] custom-box-shadow rounded-[32px] p-[10px] flex-col customSize:flex customSize:flex-row notebook:w-[70%]">
        <div className="w-full h-auto  order-2 flex tablet:pl-[20px] justify-center items-center notebook:justify-end notebook:pr-[20px]">
          <Image src="/images/nkar3.png" alt="" width={400} height={100} />
        </div>
        <div className="w-full h-auto order-1 p-[15px] pl-[20px] flex flex-col justify-center gap-[10px]">
          <p className="text-[#252E48] w-[90%] text-xl montserrat notebook:text-2xl">
            Seamless Branded Watermark Integration
          </p>
          <p className="text-[#252E48] text-base">
            Generate a sound wave with your brand’s watermark embedded in it.
            Our sound wave creator lets you add your logo or branding to the
            animations so you can keep your brand consistent throughout the
            content while protecting your work.
          </p>
        </div>
      </div>

      <div className="w-[95%] h-auto min-h-[300px] custom-box-shadow rounded-[32px] p-[10px] flex-col customSize:flex customSize:flex-row notebook:w-[70%]">
        <div className="w-full h-auto  order-1 flex tablet:pl-[20px] justify-center items-center notebook:justify-start notebook:pl-[20px]">
          <Image src="/images/nkar4.png" alt="" width={400} height={100} />
        </div>
        <div className="w-full h-auto order-2 p-[15px] pl-[20px] flex flex-col justify-center gap-[10px]">
          <p className="text-[#252E48] w-[90%] text-xl montserrat notebook:text-2xl">
            Fonts That Fit Your Vibe
          </p>
          <p className="text-[#252E48] text-base">
            Make sure your text elements match your project’s audio and visuals
            with a variety of font options. Whether you`re looking for something
            bold and modern or classic and elegant, there`s a font in our
            library that should fit your style.
          </p>
        </div>
      </div>

      <div className="w-[95%] h-auto min-h-[300px] custom-box-shadow rounded-[32px] p-[10px] flex-col customSize:flex customSize:flex-row notebook:w-[70%]">
        <div className="w-full h-auto  order-2 flex pl-30px] justify-center items-center notebook:justify-end notebook:pr-[20px]">
          <Image src="/images/nkar5.png" alt="" width={400} height={100} />
        </div>
        <div className="w-full h-auto order-1 p-[15px] pl-[20px] flex flex-col justify-center gap-[10px]">
          <p className="text-[#252E48] w-[90%] text-xl montserrat notebook:text-2xl">
            User-Friendly Interface
          </p>
          <p className="text-[#252E48] text-base">
            With an easy-to-use interface, Renderforest`s sound wave visualizer
            is accessible to everyone. Our intuitive design allows you to create
            professional-quality sound wave animations even if you have minimal
            technical knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
