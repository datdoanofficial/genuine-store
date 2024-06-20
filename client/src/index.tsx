import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const AppWrapper = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.history.replaceState(
      { ...window.history.state, scroll: [0, 0] },
      ""
    );
  }, []);

  return <App />;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

reportWebVitals();
