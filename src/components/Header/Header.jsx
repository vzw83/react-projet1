import React from "react";
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://www.svgrepo.com/show/303157/react-logo.svg" />
    </header>
  );
};

export default Header;