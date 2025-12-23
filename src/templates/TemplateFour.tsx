import React from "react";
import type { DealerData } from "@/api/dealerApi";

export const TemplateFour: React.FC<DealerData> = ({
  title,
  description,
  logoUrl,
  links,
}) => (
  <div className="min-h-screen p-8 bg-white text-primary">
    <header className="flex items-center justify-between mb-6">
      <img src={logoUrl} alt="Logo" className="h-12" />
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
    <p className="text-secondary mb-4">{description}</p>
    <div className="flex gap-4">
      {links.telegram && (
        <a href={links.telegram} className="text-primary underline">
          Telegram
        </a>
      )}
      {links.whatsapp && (
        <a href={links.whatsapp} className="text-primary underline">
          WhatsApp
        </a>
      )}
      {links.website && (
        <a href={links.website} className="text-primary underline">
          Website
        </a>
      )}
    </div>
  </div>
);
