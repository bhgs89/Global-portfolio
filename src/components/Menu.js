import React from 'react';
import '../css/Menu.css';
import { MenuIcon } from '@material-ui/icons/Menu';

class Menu extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="logo-container">
          <a href="#">
            <img src="/images/logo.png" alt="logo" />
            <p className="logo-text">Global</p>
          </a>
        </div>
        <div className="menu-bar">
          <MenuIcon />
        </div>
      </div>
    );
  }
}

export default Menu;
