import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { App } from "./App";

import "./index.css";
import { statsModule } from "./routes/stats";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "./store";

const store = createStore({ stats: statsModule.createState([]) });

WebFont.load({
  google: {
    families: ["Source Sans Pro:300,400,500,600,700", "Material Icons"]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App store={ store } />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
