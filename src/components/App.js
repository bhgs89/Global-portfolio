import React from 'react';
import '../css/App.css';
import Menu from './Menu';
import Nav from './Nav';
import Home from './Home';

const styles = {
  position: 'relative',
  backgroundColor: '#0C0C0C',
  width: '1440px',
  maxWidth: '90%',
  margin: '0 auto'
};

class App extends React.Component {
  render() {
    return (
      <div className="project-body">
        <div className="app-body">
          <header>
            <Menu />
          </header>
          <div className="container" style={styles}>
            <aside>
              <Nav />
            </aside>
            <section className="col-md-9">
              <Home />
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
