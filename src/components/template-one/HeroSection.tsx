import React from "react";
import CarImage from "@/assets/template-one/images/Car.svg";
import PointContainer from "@/assets/template-one/images/PointContainer.svg";
import { Icon } from "@iconify/react";

export const TemplateOneHeroSection: React.FC = () => {
  return (
    <div className="mt-2 relative overflow-visible">
      <div className="w-82.5 sm:w-[90%] md:w-180 lg:w-5xl xl:w-300 mx-auto relative">
        <div className="absolute top-0 -right-25 z-0 pointer-events-none hidden sm:block">
          <img src={PointContainer} alt="Point Container" />
        </div>
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:max-w-[50%] text-center lg:text-left">
            <h1 className="text-primary text-[22px] sm:text-[24px] md:text-[26px] font-medium">
              Find, Buy & Sell Cars Smarter
            </h1>

            <p className="text-[#4A5565] mt-4 max-w-full lg:max-w-117.5 text-[14px] sm:text-[15px] md:text-[16px]">
              Verified cars, trusted dealers, and transparent prices — all in
              one platform. Experience the future of automotive marketplace.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="py-3 px-4 bg-secondary text-white text-[14px] rounded-[14px] border-2 border-secondary transition-colors duration-200 flex items-center justify-center gap-3 shadow-md hover:shadow-lg font-medium cursor-pointer">
                <span>Browse Cars</span>
                <Icon icon="hugeicons:arrow-right-02" className="text-[16px]" />
              </button>
              <button className="py-3 px-4 border-2 border-secondary text-secondary rounded-[14px] transition-colors duration-200 font-medium shadow-md hover:shadow-lg cursor-pointer">
                Sell Your Car
              </button>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 sm:mt-14">
              <div>
                <p className="text-[28px] sm:text-[30px] text-primary font-medium">
                  50K+
                </p>
                <p className="text-[#4A5565] text-[14px] sm:text-[16px]">
                  Cars Listed
                </p>
              </div>
              <div>
                <p className="text-[28px] sm:text-[30px] text-primary font-medium">
                  15K+
                </p>
                <p className="text-[#4A5565] text-[14px] sm:text-[16px]">
                  Happy Customers
                </p>
              </div>
              <div>
                <p className="text-[28px] sm:text-[30px] text-primary font-medium">
                  200+
                </p>
                <p className="text-[#4A5565] text-[14px] sm:text-[16px]">
                  Dealers
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10 select-none w-full lg:w-auto flex justify-center pt-8 lg:pt-22">
            <img
              src={CarImage}
              alt="Car"
              className="max-w-full sm:max-w-[80%] lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
