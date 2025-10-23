import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { initSafeAreas } from "./utils/safeAreas";

// Inicializar safe areas para iOS
initSafeAreas();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
