import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Routes} from "react-router-dom";
import PublishProject from "./pages/PublishProject";
import ViewProject from "./pages/ViewProject";
import NavBar from "./components/NavBar";
import {createTheme} from "@mui/material";
import {green} from "@mui/material/colors";
import {ThemeProvider} from "@emotion/react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Models from "./pages/Models";
import Map from "./pages/Map"
// import
import SearchAppBar from "./components/SearchAppBar";
import SwipeableTemporaryDrawer from "./components/SwipeableTemporaryDrawer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#e1bee7',
    },
    secondary: {
      main: green[500],
    },
  },
});

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <NavBar/>
          <Routes>
            {/*<Route path="/" element={<PublishProject model_path='moxing/charge/' model_name='167'/>}/>*/}
            {/*<Route path="/" element={<SwipeableTemporaryDrawer/>}/>*/}
            <Route path="/" element={<Home/>}/>
            {/*<Route path="/" element={<Map/>}/>*/}
            <Route path="home" element={<Home/>}/>
            <Route path="publish-project" element={<PublishProject model_path='moxing/charge/' model_name='167'/>}/>
            <Route path="view-project" element={<ViewProject/>}/>
            <Route path="contact-us" element={<Map/>}/>
            <Route path="models" element={<Models/>}/>
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
