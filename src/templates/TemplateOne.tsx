import React from "react";
import type { DealerData } from "@/api/dealerApi";
import { TemplateOneHeader } from "@/components/template-one/Header";
import { TemplateOneHeroSection } from "@/components/template-one/HeroSection";
import { ServicesSection } from "@/components/template-one/ServicesSection";
import { WhyChooseCarsum } from "@/components/template-one/WhyChooseCarsum";

export const TemplateOne: React.FC<DealerData> = () => (
  // {
  //   title,
  //   description,
  //   logoUrl,
  //   links,
  // }
  <div className="bg-[#F9FAFB] h-screen">
    <TemplateOneHeader />
    <TemplateOneHeroSection />
    <ServicesSection />
    <WhyChooseCarsum />
  </div>
);
