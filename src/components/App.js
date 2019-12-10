import React from 'react';
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
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#0C0C0C'
        }}
      >
        <div style={styles}>
          <header>
            <Menu />
          </header>
          <div className="container-fluid">
            <div className="row">
              <aside className="col-md-3">
                <Nav />
              </aside>
              <section className="col-md-9">
                <Home />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
