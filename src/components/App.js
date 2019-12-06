import React from 'react';
import Menu from './Menu';

class App extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: '#0C0C0C' }}>
        <Menu />
        <div>Hello</div>
      </div>
    );
  }
}

export default App;
