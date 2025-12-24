import React from "react";
import { Icon } from "@iconify/react";

// images
import CarOne from "@/assets/template-one/images/cars/car-1.svg";
import CarTwo from "@/assets/template-one/images/cars/car-2.svg";
import CarThree from "@/assets/template-one/images/cars/car-3.svg";
import CarFour from "@/assets/template-one/images/cars/car-4.svg";

// icons
import CarIcon from "@/assets/template-one/images/cars/icons/car-icon-1.svg";
import CartIcon from "@/assets/template-one/images/cars/icons/cart-icon.svg";
import UsdIcon from "@/assets/template-one/images/cars/icons/usd.svg";
import SettingsIcon from "@/assets/template-one/images/cars/icons/settings.svg";

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
  bgColor: string;
}

const services: Service[] = [
  {
    title: "Buy New Cars",
    description:
      "Explore the latest models from top manufacturers with warranty and financing options.",
    icon: CarIcon,
    image: CarOne,
    link: "#",
    bgColor: "bg-[#2C2E87]",
  },
  {
    title: "Buy Used Cars",
    description:
      "Quality pre-owned vehicles with verified history and comprehensive inspection reports.",
    icon: CartIcon,
    image: CarTwo,
    link: "#",
    bgColor: "bg-[#4F46E5]",
  },
  {
    title: "Sell Your Car",
    description:
      "Get the best price for your vehicle with our fast, transparent selling process.",
    icon: UsdIcon,
    image: CarThree,
    link: "#",
    bgColor: "bg-[#7C3AED]",
  },
  {
    title: "Car Services",
    description:
      "Professional maintenance, repairs, and detailing services from trusted partners.",
    icon: SettingsIcon,
    image: CarFour,
    link: "#",
    bgColor: "bg-[#059669]",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 mt-24">
      <div className="w-76 sm:w-[90%] md:w-180 lg:w-5xl xl:w-300 mx-auto">
        <div className="text-center">
          <h2 className="text-primary text-[18px] sm:text-[20px] font-medium">
            Explore Our Services
          </h2>
          <p className="mt-4 text-[#4A5565] text-[14px] sm:text-[16px] max-w-xl mx-auto">
            Everything you need for your automotive journey, all in one place
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8.25
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-[0px_1px_3px_0px_#0000001A]
                transition-shadow
                overflow-hidden
                flex
                flex-col
                h-full
              "
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div
                  className={`absolute bottom-4 left-4 p-3 rounded-[14px] ${service.bgColor}`}
                >
                  <img src={service.icon} alt="Service Icon" />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-medium text-[#101828]">
                  {service.title}
                </h3>

                <p className="text-[#4A5565] text-sm mt-4 leading-relaxed">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="
                    mt-auto
                    pt-4
                    inline-flex
                    items-center
                    text-primary
                    font-medium
                    text-[14px]
                  "
                >
                  Explore
                  <Icon
                    icon="hugeicons:arrow-right-02"
                    className="ml-1 text-[16px]"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
