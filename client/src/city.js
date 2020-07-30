import React, { Component } from 'react';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cities: '',
    

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
    <div>
      <h2>All the cities</h2>
      <div className="cityContainer">
      <p className="city">{this.props.city}</p>
      <p className="walk">{this.props.walk}</p>
      <p className="eat">{this.props.eat}</p>
      <p className="discover">{this.props.discover}</p>
      <p className="museum">{this.props.museum}</p>
      <p className="hotel">{this.props.hotel}</p>
      </div>
    </div>
  );
}

export default City;