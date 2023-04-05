import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CardsProvider } from "./contexts/CardsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CardsProvider>
      <App />
    </CardsProvider>
  </React.StrictMode>
);
