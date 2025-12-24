import React from "react";

// images
import CarImageFive from "@/assets/template-one/images/cars/car-5.svg";

// icons
import SecurityIcon from "@/assets/template-one/images/cars/security-icon.svg";
import UsdIcon from "@/assets/template-one/images/cars/usd-icon.svg";
import FlashIcon from "@/assets/template-one/images/cars/flash-icon.svg";
import HeadsetIcon from "@/assets/template-one/images/cars/headset-icon.svg";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

interface WhyChooseCarsumProps {
  title?: string;
  description?: string;
  features?: Feature[];
  className?: string;
}

export const WhyChooseCarsum: React.FC<WhyChooseCarsumProps> = ({
  title = "Why Choose Carzum",
  description = "We’re committed to making car buying and selling simple, secure, and transparent.",
  features = [
    {
      id: 1,
      title: "Verified Sellers",
      description:
        "All dealers and private sellers are thoroughly verified for your peace of mind.",
      icon: SecurityIcon,
    },
    {
      id: 2,
      title: "Transparent Pricing",
      description:
        "No hidden fees. Get fair market value with our price analysis tools.",
      icon: UsdIcon,
    },
    {
      id: 3,
      title: "Fast Listings",
      description:
        "List your car in minutes and reach thousands of potential buyers instantly.",
      icon: FlashIcon,
    },
    {
      id: 4,
      title: "24/7 Support",
      description:
        "Our dedicated team is always here to help you with any questions.",
      icon: HeadsetIcon,
    },
  ],
  className = "",
}) => {
  return (
    <div
      className={`mt-24 w-76 sm:w-[90%] md:w-180 lg:w-5xl xl:w-300 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 ${className} relative`}
    >
      <div className="flex-1">
        <div className="text-primary font-medium text-[20px]">{title}</div>
        <div className="mt-4 text-[#4A5565] text-[16px] font-normal">
          {description}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-start gap-4">
              <div className="bg-primary shrink-0 py-4 px-4.5 h-14 w-14 flex items-center justify-center rounded-[14px]">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="max-w-68 mt-0 space-y-2">
                <div className="font-medium text-[#101828] text-[18px]">
                  {feature.title}
                </div>
                <div className="text-[#4A5565] text-[16px] font-normal">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 z-10">
        <img src={CarImageFive} alt="Car Image" />
      </div>

      <div className="absolute bg-primary w-48 h-48 rounded-3xl -right-14 bottom-0"></div>
    </div>
  );
};
