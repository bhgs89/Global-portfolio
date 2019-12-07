import React from 'react';
import '../css/Menu.css';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div className="logo-container">
          <a href="#">
            <img src="/images/logo.png" alt="logo" />
            <p className="logo-text">Global</p>
          </a>
          <ButtonToolbar>
            <Button>Default</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default Menu;
