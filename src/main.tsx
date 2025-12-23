import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "@/routes/router.tsx";
import { DealerProvider } from "@/contexts/DealerProvider";
import { DealerThemeProvider } from "@/contexts/DealerThemeProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DealerProvider debug={true}>
      <DealerThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </DealerThemeProvider>
    </DealerProvider>
  </StrictMode>
);
