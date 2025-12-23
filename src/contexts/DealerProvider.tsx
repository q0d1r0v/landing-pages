import React, { useEffect, useState, type ReactNode } from "react";
import { fetchDealer, type DealerData } from "@/api/dealerApi";
import {
  DealerContext,
  type DealerContextType,
} from "@/contexts/DealerContext";

const defaultDealer: DealerData = {
  dealerId: "debug",
  templateKey: "templateOne",
  primaryColor: "#2563EB",
  secondaryColor: "#FBBF24",
  logoUrl: "/react.svg",
  title: "Debug Title",
  description: "This is a debug description for the template.",
  links: {
    telegram: "#",
    whatsapp: "#",
    website: "#",
  },
};

interface DealerProviderProps {
  children: ReactNode;
  debug?: boolean;
}

export const DealerProvider: React.FC<DealerProviderProps> = ({
  children,
  debug = false,
}) => {
  const [dealer, setDealer] = useState<DealerData | null>(
    debug ? defaultDealer : null
  );

  useEffect(() => {
    const dealerId = "1";
    fetchDealer(dealerId).then(setDealer).catch(console.error);
  }, []);

  if (!dealer) return <div>Loading...</div>;

  return (
    <DealerContext.Provider value={{ dealer } as DealerContextType}>
      {children}
    </DealerContext.Provider>
  );
};
