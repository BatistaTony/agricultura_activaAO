import React from "react";
import LangingPage from "./components/landingPage/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./components/landingPage/account/account";
import Dashboard from "./components/App/dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LangingPage} />
        <Route exact path="/register" component={Account} />
        <Route  exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
