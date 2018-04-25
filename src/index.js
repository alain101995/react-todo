import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
// import rootReducer from "./reducers";
import App from "./containers/App";
import Users from "./components/Users/Users";
import Users1 from "./components/Users/Users1";
import TodoInput from "./components/TodoInput/TodoInput";
import configureStore from "./configureStore";
export const history = createHistory();
const store = configureStore({});

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users1" component={Users1} />
        <Route exact path="/todoinput" component={TodoInput} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
