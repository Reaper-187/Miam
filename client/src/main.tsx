import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { ModelProvider } from "./Context/ModalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ModelProvider>
        <App />
      </ModelProvider>
    </StrictMode>
  </BrowserRouter>
);
