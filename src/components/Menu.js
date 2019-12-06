import React from 'react';
import '../css/Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div className="logo-container">
          <a href="#">
            <img src="/images/logo.png" alt="logo" />
            <p className="logo-text">Global</p>
          </a>
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
