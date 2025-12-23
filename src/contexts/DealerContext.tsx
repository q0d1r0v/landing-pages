import { createContext } from "react";
import type { DealerData } from "@/api/dealerApi";

export interface DealerContextType {
  dealer: DealerData | null;
}

export const DealerContext = createContext<DealerContextType>({ dealer: null });
