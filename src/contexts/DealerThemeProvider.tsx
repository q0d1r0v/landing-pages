import React, { useEffect, type ReactNode } from "react";
import { useDealer } from "@/contexts/useDealer";

interface DealerThemeProviderProps {
  children: ReactNode;
}

export const DealerThemeProvider: React.FC<DealerThemeProviderProps> = ({
  children,
}) => {
  const { dealer } = useDealer();

  useEffect(() => {
    if (!dealer) return;
    document.documentElement.style.setProperty(
      "--color-primary",
      dealer.primaryColor
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      dealer.secondaryColor
    );
  }, [dealer]);

  return <>{children}</>;
};
