import react from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />); // This is root or starting point of opur application where we are rendering App
// In the abouve line we have added '!'. This is done so that when in case the root is potentially null, the typescript is not trowing error.
