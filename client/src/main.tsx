import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ModelProvider } from "./Context/ModalContext.tsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ModelProvider>
        <Toaster />
        <App />
      </ModelProvider>
    </StrictMode>
  </BrowserRouter>
);
