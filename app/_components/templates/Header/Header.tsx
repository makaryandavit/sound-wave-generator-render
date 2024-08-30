import React from "react";
import { navigationItems } from "@/app/_data/navigation.data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui";

const Header = () => {
  return (
    <header className="w-full h-[9vh] bg-white border-2 border-black">
      <div className=" w-full h-full  flex justify-between">
        <nav className="flex justify-evenly items-center w-[60%] bg-orange-600 h-full">
          <Link href="/" key={Math.random() * Math.random()}>
            <Image src="/images/logo.svg" alt="Logo" width={150} height={100} />
          </Link>
          {navigationItems.map((item) => (
            <Link key={item.id} href={item.url} className="text-sm marks">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="w-[30%] bg-red-700 h-full flex justify-evenly items-center">
          <p>Pricing</p>
          <p>Learn</p>
          <div className="w-[35px] h-[35px] bg-black"></div>
          <Button
            className="bg-white w-[80px] h-[40px] border-gray-400 border-2 rounded-[5px] bg-transparent"
            value="Sign In"
          />
          <Button
            className="bg-yellow-500 w-[100px] h-[40px] rounded-[5px] bg-gradient-to-r from-[#5690FF] to-[#3271E6] text-white"
            value="Try for Free"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
