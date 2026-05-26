import { useEffect } from "react";

const MATCHVIBE_URL = "https://www.matchvibe.co.in/";

export default function App() {
  useEffect(() => {
    window.location.replace(MATCHVIBE_URL);
  }, []);

  return (
    <p style={{ fontFamily: "system-ui, sans-serif", padding: "1rem" }}>
      Redirecting to{" "}
      <a href={MATCHVIBE_URL}>Match Vibe</a>...
    </p>
  );
}