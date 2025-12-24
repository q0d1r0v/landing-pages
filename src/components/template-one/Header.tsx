import { Icon } from "@iconify/react";
import { useState } from "react";

export const TemplateOneHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { id: 1, name: "Home" },
    { id: 2, name: "Buy a Car" },
    { id: 3, name: "Sell a Car" },
    { id: 4, name: "Services" },
    { id: 5, name: "Blog" },
    { id: 6, name: "Contact" },
  ];

  return (
    <header className="w-full relative">
      <div className="w-76 sm:w-[90%] md:w-180 lg:w-5xl xl:w-300 mx-auto">
        <div className="bg-white py-6 flex items-center justify-between relative z-10">
          <img
            src="/carzum-logo.svg"
            alt="Carzum Logo"
            className="select-none cursor-pointer"
          />

          <nav className="hidden lg:flex items-center gap-6 md:gap-8">
            {menu.map((item) => (
              <div
                key={item.id}
                className="text-[#364153] text-sm sm:text-base cursor-pointer hover:text-primary transition-colors"
              >
                {item.name}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4 sm:gap-6">
            <Icon
              icon="hugeicons:heart-check"
              className="text-[16px] sm:text-[18px]"
            />
            <Icon
              icon="hugeicons:user-02"
              className="text-[16px] sm:text-[18px]"
            />

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <Icon
                icon={isOpen ? "hugeicons:cancel-01" : "hugeicons:menu-01"}
                className="text-[22px] sm:text-[24px]"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
          lg:hidden
          absolute top-full left-0 w-full
          bg-white
          overflow-hidden
          transition-[max-height,opacity] duration-300 ease-in-out
          z-20
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {menu.map((item) => (
            <div
              key={item.id}
              onClick={() => setIsOpen(false)}
              className="text-[#364153] text-sm sm:text-base cursor-pointer hover:text-primary transition-colors"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
