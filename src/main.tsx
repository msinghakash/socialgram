import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Below is root or starting point of opur application where we are rendering App
// In the abouve line we have added '!'. This is done so that when in case the root is potentially null, the typescript is not trowing error.
// And after installing and importing the BrowserRouter we are not wrapping out application within it. This package is for managing the routes.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
