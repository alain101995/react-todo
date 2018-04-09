// import React from "react";
// import ReactDOM from "react-dom";
// import "./App.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
