import React from "react";
import LangingPage from "./components/landingPage/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Account from "./components/landingPage/account/account";
import Dashboard from "./components/App/dashboard/dashboard";
import PrivateRouter from "./privateRouter";
import { useSelector } from "react-redux";
import PageNotFound from "./pageNotFound";
import Alert from "./components/App/alert/alert";

function App() {
  const Farm = useSelector((state) => state.Farm);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={LangingPage} />
          <Route exact path="/register" component={Account} />
          <PrivateRouter
            exact
            path="/dashboard"
            component={Dashboard}
            authed={1}
          />
          <PrivateRouter
            exact
            path="/alerta_scasseis"
            component={Alert}
            authed={1}
          />
          {/* <Route exact path="*" component={PageNotFound} /> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
