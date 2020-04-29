import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Provider } from "react-redux";

import HeaderNavigation from "./components/HeaderNavigation";
import Home from "./containers/Home";
import Users from "./containers/Users";
import history from "./history";
import { store } from "./reducers/store";

const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <Router history={history}>
          <HeaderNavigation />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </Container>
  );
};

const About = () => {
  return <h2>About</h2>;
};

export default App;
