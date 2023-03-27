import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
  return (
    <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
            <Profile />
        </div>

      {/*<Profile />*/}
    </div>
  );
};

export default App;
