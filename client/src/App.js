import React, { Component } from "react";
import './App.css';
// import Cities from '/Cities'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cities: '' 
    };
}


callCities() {
  fetch("http://localhost:3002/api/cities")
      .then(res => res.json())
      .then(data => this.setState({ cities: data.cities[0].city }))
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
          <p className="App-intro">
            
            {this.state.cities}
            </p>

          
      </div>
  );
  }
}



export default App;
