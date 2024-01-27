import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { PokeProvider } from "./providers/PokeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <PokeProvider>
    <App />
    </PokeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
