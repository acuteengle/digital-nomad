import React from 'react';
import "App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes.js';
import { NavigationBar } from 'components/NavigationBar';

library.add(fab);

const theme = createTheme({
  typography: {
    fontFamily: ["Helvetica Neue"],
  }
});

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        {ROUTES.map(({ label, path, View, slug }) => (
          <Route key={label} path={path} element={<View />}>
            <Route path={slug} element={<View />} />
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
