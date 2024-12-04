import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);