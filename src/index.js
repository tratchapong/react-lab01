import ReactDOM from "react-dom/client";
import {BrowserRouter, HashRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.scss";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
);
