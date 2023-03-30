import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css'


const Nav = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news">News</NavLink>
        </div>
        {/* <div className={s.item}>
          <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="setings" activeClassName={s.activeLink}>Settings</NavLink>
        </div> */}
      </nav>  
  );
};

export default Nav;
