import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const MATCHVIBE_URL = "https://www.matchvibe.co.in/";

window.location.replace(MATCHVIBE_URL);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);