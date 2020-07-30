import React, { Component } from "react";
import './App.css';
import Hotspot from './cities'



function checkState(props) {
  if (keys === true) {
    this.state.keys.map(key => {
      return (
        <Hotspot
          action={key}
          suggestion={this.state.hotspots.key}
        />
      )
    });
  }
  return null;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotspots: null,
      keys: null
    };
  }


  callCities = () => {
    fetch("http://localhost:3002/api/cities/Vlieland")
      .then(res => res.json())
      .then(data => this.setState({
        keys: data.hotspots.keys(),
        hotspots: data.hotspots
      }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callCities();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <div>
            {
              this.state.keys.map(key => {
                return (
                  <Hotspot
                    action={key}
                    suggestion={this.state.hotspots.key}
                  />
                )
              })
            }
          </div>
        </main>
      </div>
    );
  }
}



export default App;