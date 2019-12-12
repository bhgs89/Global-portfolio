import React from 'react';
import '../css/App.css';
import Menu from './Menu';
import Nav from './Nav';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="project-body">
        <div className="app-body">
          <Menu />
          <Nav />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
