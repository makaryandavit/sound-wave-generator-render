import Image from "next/image";
import React from "react";

const Footer = () => {
  return <footer className="w-full h-auto min-h-[70px]  gap-5 flex footer-background justify-around items-center flex-wrap">
    <Image  src="/images/logoBlack.svg" alt="logoBlack" width={180} height={50}/>
    <p>Renderforest © 2013 - 2024</p>
    <div className="w-[250px] h-[40px] flex justify-evenly items-center">
      <Image src="/images/facebook.svg" alt="facebookIcon" width={15} height={15}/>
      <Image src="/images/insta.svg" alt="InstagramIcon" width={25} height={25}/>
      <Image src="/images/pinterest.svg" alt="PinterestIcon" width={25} height={25}/>
      <Image src="/images/twitt.svg" alt="TwitterIcon" width={25} height={25}/>
      <Image src="/images/youtube.svg" alt="YouTubeIcon" width={25} height={25}/>
    </div>
  </footer>;
};

export default Footer;
