import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto) ">
      <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
        <div>
          <img src="/slide-1.png" />
          <div
            className="px-[5px] md:px-[40px] py-[5px] md:py-[25px] absolute bg-white 
          bottom-[25px] md:bottom-[50px] left-0 text-black/[0.9] 
          text-[10px] md:text-[30px] uppercase font-medium 
          cursor-pointer hover:bg-slate-100"
          >
            Shop Now
          </div>
        </div>
        <div>
          <img src="/slide-2.png" />
          <div
            className="px-[5px] md:px-[40px] py-[5px] md:py-[25px] absolute bg-white 
          bottom-[25px] md:bottom-[50px] left-0 text-black/[0.9] 
          text-[10px] md:text-[30px] uppercase font-medium 
          cursor-pointer hover:bg-slate-100"
          >
            Shop Now
          </div>
        </div>
        <div>
          <img src="/slide-3.png" />
          <div
            className="px-[5px] md:px-[40px] py-[5px] md:py-[25px] absolute bg-white 
          bottom-[25px] md:bottom-[50px] left-0 text-black/[0.9] 
          text-[10px] md:text-[30px] uppercase font-medium 
          cursor-pointer hover:bg-slate-100"
          >
            Shop Now
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;
