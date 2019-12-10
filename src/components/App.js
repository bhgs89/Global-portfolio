import React from 'react';
import Menu from './Menu';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#0C0C0C' }}>
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
