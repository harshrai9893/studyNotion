import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

const react = ReactDOM.createRoot(document.getElementById("root"));
react.render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
);
