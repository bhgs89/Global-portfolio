import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import '../css/Menu.css';

/*
 * Use makeStyles in const Menu Component
 */
const menuStyles = makeStyles({
  icon: {
    color: 'white',
    width: '30px',
    height: '30px'
  }
});

const Menu = () => {
  const classes = menuStyles();
  return (
    <header className="menu-container">
      <a className="logo-container" href="#">
        <img src="/images/logo.png" alt="logo" />
        <p>Global</p>
      </a>

      <button className="hire-button">Hire us</button>

      <div className="menu-bar">
        <MenuIcon className={classes.icon} />
      </div>
    </header>
  );
};

export default Menu;
