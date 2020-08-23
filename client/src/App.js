import React, { Component } from "react";
import './App.css';
import Hotspot from './hotspot'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotspots: null,
      keys: null
    };
  }
  
  callCities = () => {
    let city = document.getElementById("city").value;
    fetch(`http://localhost:3002/api/cities/${city.toLowerCase()}`)
      .then(res => res.json())
      .then(data => this.setState({
        hotspots: data.hotspots,
        keys: Object.keys(data.hotspots)
      }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callCities();
  }

  render() {
    return (
      <div className="App">
        <header className="Wanderer-header">
          <img className="cover" src="https://picsum.photos/id/1021/2500/460" alt="mountains" />
          <div className="centered">
            <h1 className="App-title">Welcome, wanderer!</h1>
            <i className="fa fa-suitcase" aria-hidden="true"></i>
            <p className="go">Where do you want to go?</p>
            <div className="button-input-field">
              <input
                type="text"
                id="city"
                className="form-field"
                placeholder="Go to..."
              />
              <button type="submit" className="wander-to-city" id="button" onClick={this.callCities.bind(this)}>To my destination</button>
            </div>
          </div>
        </header>
        <main>
          <div>
            {
              this.state.keys ? this.state.keys.map(key => (
                <Hotspot
                  key={Math.random()}
                  action={key}
                  suggestion={this.state.hotspots[key]}
                />)) :
                null
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;