import React from 'react';
import '../css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="home-section">
        <div className="home-main">
          <h1>Your next interactive experience</h1>
          <button>Hire us</button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Metiew and Smith</h4>
              <p>
                Lorem ipsum dolor sit amet. consectetur adipisicing elit sed do
              </p>
            </div>
            <div className="col-md-4">
              <h4>Metiew and Smith</h4>
              <p>
                Lorem ipsum dolor sit amet. consectetur adipisicing elit sed do
              </p>
            </div>
            <div className="col-md-4">
              <h4>Metiew and Smith</h4>
              <p>
                Lorem ipsum dolor sit amet. consectetur adipisicing elit sed do
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
