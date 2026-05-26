import { useEffect } from "react";
import { PLAY_STORE_URL } from "./redirectConfig.js";
import { isPreviewBot } from "./isPreviewBot.js";

export default function App() {
  useEffect(() => {
    if (!isPreviewBot()) {
      window.location.replace(PLAY_STORE_URL);
    }
  }, []);

  return (
    <p style={{ fontFamily: "system-ui, sans-serif", padding: "1rem" }}>
      Redirecting to{" "}
      <a href={PLAY_STORE_URL}>Google Play</a>...
    </p>
  );
}
