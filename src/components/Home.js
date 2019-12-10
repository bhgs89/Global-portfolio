import React from 'react';
import '../css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <section className="home-section">
        <div className="container home-main">
          <div className="row">
            <div className="col-md-5">
              <h1>Your next interactive experience</h1>
              <button>Hire us</button>
            </div>
            <div className="col-md-7">
              <img src="/images/introduction-visual.png" alt="" />
            </div>
          </div>
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
      </section>
    );
  }
}

export default Home;
