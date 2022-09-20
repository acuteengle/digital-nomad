import React from 'react';
import "App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes.js';
import { NavigationBar } from 'components/NavigationBar';

library.add(fab);

export const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        {ROUTES.map(({ label, path, View, exact }) => <Route key={label} path={path} element={<View />} exact={exact} />)}
        <Route render={() => {
          return <p>Not found</p>
        }} />
      </Routes>
    </BrowserRouter>
  );
}
