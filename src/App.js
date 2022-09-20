import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { VIEWS } from './routes.js';

library.add(fab);

export const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* TODO: Insert NavBar here */}
      {/* <Switch>
        {VIEWS.map(({ label, path, view, exact }) => <Route path={path} component={view} exact={exact} />)}
        <Route render={() => {
          return <p>Not found</p>
        }} />
      </Switch> */}
    </BrowserRouter>
  );
}
