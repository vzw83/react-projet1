import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setings from "./components/Setings/Setings";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" Component={Dialogs} />
            <Route path="/profile" Component={Profile} />
            <Route path="/music" Component={Music} />
            <Route path="/news" Component={News} />
            <Route path="/setings" Component={Setings} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
