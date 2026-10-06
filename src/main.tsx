import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import LegalPage from "./LegalPage.tsx";
import ContactPage from "./ContactPage.tsx";
import "./index.css";

const path = window.location.pathname;
const host = window.location.hostname;
const isContactHost =
  host === "contact.hairconnection.in" || host === "contact.thehairconnection.in";

let app = <App />;

if (isContactHost || path === "/contact") {
  app = <ContactPage />;
} else if (path === "/privacy") {
  app = <LegalPage page="privacy" />;
} else if (path === "/terms") {
  app = <LegalPage page="terms" />;
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>{app}</StrictMode>
);
