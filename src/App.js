import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./containers/Login";

function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;