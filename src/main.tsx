import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import LegalPage from "./LegalPage.tsx";
import "./index.css";

const path = window.location.pathname;

let app = <App />;

if (path === "/privacy") {
  app = <LegalPage page="privacy" />;
} else if (path === "/terms") {
  app = <LegalPage page="terms" />;
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>{app}</StrictMode>
);
