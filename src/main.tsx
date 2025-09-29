import "./index.css";
import { Toaster } from "react-hot-toast";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { CustomRoutes } from "@/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
    <Toaster
      position="top-right"
      toastOptions={{
        className: "mt-[80px]",
      }}
    />
  </StrictMode>
);
