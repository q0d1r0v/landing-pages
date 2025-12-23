import { useContext } from "react";
import { DealerContext } from "@/contexts/DealerContext";

export const useDealer = () => useContext(DealerContext);
