import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
// import rootReducer from "./reducers";
import App from "./containers/App";
import Users from "./components/Users/Users";
import configureStore from "./configureStore";
export const history = createHistory();
const store = configureStore({});

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
