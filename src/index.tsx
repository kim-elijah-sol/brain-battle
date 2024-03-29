import { Global, css } from "@emotion/react";
import normalize from "emotion-normalize";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global
      styles={css`
        ${normalize}
      `}
    />
    <App />
    <ToastContainer
      autoClose={3000}
      closeButton={false}
      stacked
      toastStyle={{
        background: "rgba(227, 227, 227, 0.25)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.24)",
        color: "white",
        borderRadius: 12,
      }}
    />
  </React.StrictMode>
);
