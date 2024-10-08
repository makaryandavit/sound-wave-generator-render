"use client";

import { use, useEffect, useState } from "react";
import { navigationItems } from "@/app/_data/navigation.data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui";
import { dropdown1Items1, dropdown1Items2 } from "@/app/_data/dropdown.data";
import { videoMenuItems1, videoMenuItems2 } from "@/app/_data/videoMenu.data";

const Header = () => {
  const [mobileMenuList, setMobileMenuList] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [videoMenu, setVideoMenu] = useState(false);
  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add("freeze", "scroll-off");
    } else {
      document.body.classList.remove("freeze", "scroll-off");
    }
  }, [mobileMenu]);

  const [isWiderThan1195, setIsWiderThan1150] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWiderThan1150(window.innerWidth > 1195);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full h-[9vh] bg-white header-shadow z-[80] relative">
      <div className=" w-full h-full  flex justify-between items-center relative">
        <Link
          href="/"
          key={Math.random() * Math.random()}
          className="mobile:w-[50px] mobile:h-[50px] absolute left-[3%] top-[50%] notebook:w-auto notebook:top-0 flex items-center z-10 notebook:relative"
        >
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={150}
            height={100}
            className="mobile:hidden tablet:hidden  notebook:block "
          />
          <Image
            src="/images/logoPart.svg"
            alt="LogoPart"
            width={35}
            height={35}
            className="tablet:block  notebook:hidden absolute left-[2%] translate-y-[-50%] "
          />
        </Link>
        <nav className="mobile:hidden tablet:w-[100%] tablet:flex tablet:justify-center notebook:w-[62%] notebook:gap-[10px] flex justify-between items-center h-full relative">
          <ul className="tablet:justify-around tablet:w-[70%] notebook:w-[80%] notebook:gap-[20px] flex h-full justify-around items-center">
            {navigationItems.map((item) => (
              <li
                className="h-full flex justify-center marks items-center group"
                key={item.id}
              >
                <Link
                  href={item.url}
                  className="whitespace-nowrap text-sm montserrat relative custom-text-color flex gap-2 "
                >
                  {item.label}
                  {isWiderThan1195 ? (
                    <Image
                      src="/images/arrowBottom.svg"
                      className="duration-[.2s] group-hover:rotate-[180deg]"
                      alt="mark"
                      width={10}
                      height={10}
                    />
                  ) : (
                    ""
                  )}
                  {item.isDropdown ? (
                    <div className="absolute hidden h-[400px] dropdown-shadow bg-white top-[5.3vh] left-0 min-w-[240px]  notebook:group-hover:flex flex-col rounded-[16px] p-[16px]">
                      <div className="w-full h-[80%]">
                        <div className="w-full h-[60px] montserrat custom-camera-bgcolor rounded-[8px] font-bold flex items-center gap-[15px] pl-[15px]">
                          <Image
                            src="/images/camera.svg"
                            width={40}
                            height={40}
                            alt="Camera"
                          />
                          Create Video
                        </div>
                        <div className="w-full h-auto p-4 flex gap-7">
                          <div className="w-[350px] h-[200px] border-r border-gray-400 flex justify-between">
                            <ul className="w-[48%] h-full flex flex-col gap-4 relative pt-10">
                              <p className="text-gray-400 absolute top-[5px] font-bold montserrat">
                                Categories
                              </p>
                              {dropdown1Items1.map((item) => (
                                <li key={item.id}>
                                  <p className=" montserrat">{item.label}</p>
                                </li>
                              ))}
                            </ul>
                            <ul className="w-[48%] h-full pt-10 flex flex-col gap-4">
                              {dropdown1Items2.map((item) => (
                                <li key={item.id}>
                                  <p className=" montserrat">{item.label}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="w-[350px] h-[200px] flex">
                            <ul className="w-[48%] h-full flex flex-col gap-4 relative pt-10">
                              <p className="text-gray-400 absolute top-[5px] font-bold montserrat">
                                Features
                              </p>
                              {dropdown1Items1.map((item) => (
                                <li key={item.id}>
                                  <p className="font-bold montserrat">
                                    {item.label}
                                  </p>
                                </li>
                              ))}
                            </ul>
                            <ul className="w-[48%] h-full pt-10 flex flex-col gap-4">
                              {dropdown1Items2.map((item) => (
                                <li key={item.id}>
                                  <p className="font-bold montserrat">
                                    {item.label}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-[20%]  flex justify-center items-center">
                        <div className="w-[180px] h-[45px] flex montserrat justify-center items-center gap-2 font-bold text-[#3271E6]">
                          Browse More
                          <Image
                            src="/images/arrowRight.svg"
                            className=""
                            alt="arrowRight"
                            width={15}
                            height={15}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="absolute right-[3%] tablet: w-[30px] h-[30px] notebook:hidden custom-burger cursor-pointer"
          onClick={() => {
            setMobileMenu(!mobileMenu);
            setMobileMenuList(false);
            setVideoMenu(false);
          }}
        >
          <div className="custom-list w-full h-full flex flex-col justify-center items-center relative">
            <span
              className={`w-[30px] h-[4px] bg-gray-600 translate-y-[-5px] duration-100 absolute rounded ${
                mobileMenu ? "!translate-y-[0px] rotate-[45deg]" : ""
              }`}
            ></span>
            <span
              className={`w-[30px] h-[4px] bg-gray-600 translate-y-[5px] duration-100 absolute rounded ${
                mobileMenu ? "!translate-y-[0px] rotate-[-45deg]" : ""
              }`}
            ></span>
          </div>
        </div>
        <div
          className={`z-50 w-[305px] flex flex-col gap-[10px] items-center overflow-hidden custom-height-mobile-menu bg-white absolute right-0 top-[9vh] duration-[.1s] transform ${
            mobileMenu ? `translate-x-[3px]` : `translate-x-[310px]`
          } notebook:hidden`}
        >
          <ul className="flex flex-col w-full">
            <li
              className="w-full h-[70px] border-b bg-white flex justify-between px-5 items-center group cursor-pointer "
              onClick={() => {
                setMobileMenuList(!mobileMenuList);
              }}
            >
              Create
              <Image
                src="/images/arrowBottom.svg"
                className={`duration-[.2s] transform ${
                  mobileMenuList ? "rotate-[180deg]" : ""
                }`}
                width={10}
                height={10}
                alt="mark"
              />
            </li>
            <div
              className={`w-full  duration-500 overflow-hidden ${
                mobileMenuList ? "h-auto" : "h-0"
              }`}
            >
              <ul className="w-full h-auto flex flex-col mobileMenuBackground">
                <li
                  className="cursor-pointer w-full h-[60px] border-b flex justify-start pl-3 items-center gap-[10px] relative text-[#545F7E]"
                  onClick={() => {
                    setVideoMenu(!videoMenu);
                  }}
                >
                  <Image
                    src="./images/camera.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                  Videos
                  <Image
                    src="./images/rightArrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="absolute right-[5%]"
                  />
                </li>
                <li className="cursor-pointer w-full h-[60px] border-b flex justify-start pl-3 items-center gap-[10px] relative text-[#545F7E]">
                  <Image
                    src="./images/camera.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                  Websites
                  <Image
                    src="./images/rightArrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="absolute right-[5%]"
                  />
                </li>
                <li className="cursor-pointer w-full h-[60px] border-b flex justify-start pl-3 items-center gap-[10px] relative text-[#545F7E]">
                  <Image
                    src="./images/camera.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                  Logos
                  <Image
                    src="./images/rightArrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="absolute right-[5%]"
                  />
                </li>
                <li className="cursor-pointer w-full h-[60px] border-b flex justify-start pl-3 items-center gap-[10px] relative text-[#545F7E]">
                  <Image
                    src="./images/camera.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                  Mockups
                  <Image
                    src="./images/rightArrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="absolute right-[5%]"
                  />
                </li>
                <li className="cursor-pointer w-full h-[60px] flex justify-start pl-3 items-center gap-[10px] relative text-[#545F7E]">
                  <Image
                    src="./images/camera.svg"
                    alt=""
                    width={35}
                    height={35}
                  />
                  Designs
                  <Image
                    src="./images/rightArrow.svg"
                    alt=""
                    width={15}
                    height={15}
                    className="absolute right-[5%]"
                  />
                </li>
              </ul>
            </div>
            <li className="w-full h-[70px] border-b bg-white flex justify-between px-5 items-center group cursor-pointer">
              Explore Ai
              <Image
                src="/images/arrowBottom.svg"
                className="duration-[.2s] transform"
                width={10}
                height={10}
                alt="mark"
              />
            </li>
            <li className="w-full h-[70px] border-b bg-white flex justify-between px-5 items-center group cursor-pointer">
              Pricing
              <Image
                src="/images/arrowBottom.svg"
                className="duration-[.2s] transform"
                width={10}
                height={10}
                alt="mark"
              />
            </li>
            <li className="w-full h-[70px] border-b bg-white flex justify-between px-5 items-center group cursor-pointer">
              Learn
              <Image
                src="/images/arrowBottom.svg"
                className="duration-[.2s] transform"
                width={10}
                height={10}
                alt="mark"
              />
            </li>
            <li className="w-full h-[70px] bg-white flex justify-between px-5 items-center group cursor-pointer">
              <Image
                src="/images/flag1.svg"
                alt="flag"
                width={40}
                height={40}
              />
              <Image
                src="/images/arrowBottom.svg"
                className="duration-[.2s] transform"
                width={10}
                height={10}
                alt="mark"
              />
            </li>
          </ul>
          <Button
            className="w-[85%] h-[45px] rounded-[5px] bg-gradient-to-r from-[#5690FF] to-[#3271E6] text-white cursor-pointer"
            value="Try for Free"
          />
          <Button
            className="w-[85%] h-[45px] border-gray-400 border rounded-[5px] bg-transparent custom-btn-styles cursor-pointer"
            value="Sign In"
          />
          <div
            className={`w-full h-full bg-white absolute duration-[.2s]  top-0 left-0 ${
              videoMenu ? "translate-x-[0%]" : "translate-x-[105%]"
            }`}
          >
            <div className="w-full h-[60px] flex justify-center items-center relative mobileMenuBackground">
              <Image
                src="./images/arrowBack.svg"
                alt=""
                width={35}
                height={35}
                className="absolute left-[5%]"
                onClick={() => {
                  setVideoMenu(false);
                }}
              />
              Create Video
            </div>
            <div className="w-full videoMenuHeight  overflow-y-scroll">
              <ul className="w-full flex flex-col gap-[10px] p-[15px] pl-[20px] border-b">
                <p className="text-[#7683A8] font-bold">Categories</p>
                {videoMenuItems1.map((item) => (
                  <li key={item.id} className="text-[#252E48]">
                    {item.label}
                  </li>
                ))}
              </ul>
              <ul className="w-full flex flex-col gap-[10px] p-[15px] pl-[20px]">
                <p className="text-[#7683A8] font-bold">Featured</p>
                {videoMenuItems2.map((item) => (
                  <li key={item.id}>{item.label}</li>
                ))}
              </ul>
            </div>
            <div className="w-full h-[50px]  flex justify-center items-center gap-[10px] menu-shadow">
              Browse More
              <Image
                src="/images/arrowRight.svg"
                className=""
                alt="arrowRight"
                width={15}
                height={15}
              />
            </div>
          </div>
        </div>
        <div
          className={`z-20 w-[100vw] custom-height-mobile-menu custom-backgroundMenu top-[9vh] absolute ${
            mobileMenu ? "block" : "hidden"
          } notebook:hidden`}
        ></div>
        <div className="mobile:hidden tablet:hidden notebook:flex w-[36%]  h-full  justify-center gap-[30px] items-center pr-2">
          <Link href="">
            <p className="flex items-center gap-2 text-sm montserrat custom-text-color group">
              Pricing{" "}
              <Image
                src="/images/arrowBottom.svg"
                className="duration-[.2s] transform group-hover:rotate-[180deg]"
                width={10}
                height={10}
                alt="mark"
              />
            </p>
          </Link>
          <Link href="">
            <p className="flex items-center gap-2 text-sm montserrat custom-text-color group">
              Learn{" "}
              <Image
                src="/images/arrowBottom.svg"
                className="transform duration-[.2s] group-hover:rotate-[180deg]"
                width={10}
                height={10}
                alt="mark"
              />
            </p>
          </Link>
          <div className="w-[35px] h-[35px] flex gap-2 group cursor-pointer">
            <Image src="/images/flag1.svg" alt="flag" width={50} height={50} />
            <Image
              src="/images/arrowBottom.svg"
              className="transform duration-[.2s] group-hover:rotate-[180deg]"
              width={10}
              height={10}
              alt="mark"
            />
          </div>
          <Button
            className="bg-white w-[80px] h-[45px] border-gray-400 border-2 rounded-[5px] bg-transparent custom-btn-styles hover:bg-[#EEF5FF] cursor-pointer"
            value="Sign In"
          />
          <Button
            className="bg-yellow-500 w-[110px] h-[45px] rounded-[5px] bg-gradient-to-r from-[#5690FF] to-[#3271E6] text-white cursor-pointer"
            value="Try for Free"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
