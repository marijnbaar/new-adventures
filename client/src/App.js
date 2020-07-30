import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}


callCities() {
  fetch("http://localhost:3002/api/cities")
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }))
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
          <p className="App-intro">{this.state.apiResponse}</p>

          
      </div>
  );
  }
}

export default App;
