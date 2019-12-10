import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import '../css/Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-container">
        <div className="logo-container">
          <a href="#">
            <img src="/images/logo.png" alt="logo" />
            <p>Global</p>
          </a>
        </div>
        <div className="menu-bar">
          <MenuIcon
            style={{
              color: 'white',
              width: '30px',
              height: '30px'
            }}
          />
        </div>
      </div>
    );
  }
}

export default Menu;
