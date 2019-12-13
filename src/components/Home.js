import React from 'react';
import '../css/Home.css';

class Home extends React.Component {
  render() {
    return (
      <section className="home-section">
        <div className="home-main">
          <div>
            <h1>Your next interactive experience</h1>
            <button className="home-hire-button">
              <div className="button-background"></div>
              <span>Hire us &#x2192;</span>
            </button>
          </div>
          <div>
            <img src="/images/introduction-visual.png" alt="" />
          </div>
        </div>

        <div className="container description">
          <div className="row">
            <div className="col-md-4 desc-item">
              <h3>Metiew &#x26; Smith</h3>
              <p>
                Lorem ipsum dolor sit amet. consectetur adipisicing elit sed do
              </p>
            </div>
            <div className="col-md-4 desc-item">
              <h3>Fantasy Interactive</h3>
              <p>
                Lorem ipsum dolor sit amet. consectetur adipisicing elit sed do
              </p>
            </div>
            <div className="col-md-4 desc-item">
              <h3>Paul &#x26; Shark</h3>
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
