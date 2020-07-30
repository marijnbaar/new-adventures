import React, { Component } from "react";
import './App.css';
import Hotspot from './cities'


class App extends Component {

  state = {
    hotspots: null,
    keys: null
  }

  getCity = () => {
    fetch(`http://localhost:3002/api/cities/${this.state.hotspots}`)
      .then(res => res.json())
      .then(data => this.setState({
        keys: data.hotspots.walk,

        // hotspots: data.hotspots
      }))
      .catch(err => err);
  }

  callCities = () => {
    console.log("try")
    let city = document.getElementById("city").value;
    // fetch(`http://localhost:3002/api/cities/${city}`)
    //   .then(res => res.json())
    //   .then(data => {
        this.setState({
        // keys: data.hotspots.keys(),
        hotspots: city
      })
      // .then(console.log('try2', this.state.hotspots))
    // })
      // .catch(err => err);
    this.getCity();
  }






  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
      <p>{this.state.hotspots}</p>
      <p>{this.state.keys}</p>
      <input type="text" id="city"></input><button onClick={this.callCities.bind(this)}>click me</button>
        </header>
        <main>
          <div>
            {
              this.state.keys ? this.state.keys.map(key => (<Hotspot action={key} suggestion={this.state.hotspots.key}/>)) :
              null
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;