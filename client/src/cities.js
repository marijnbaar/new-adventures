import React, { Component } from 'react';

import City from "./City";


render() {
  return (
    <div>
      <h2>All the cities</h2>
      <div className="cityContainer">
        {this.props.cities.map((city) => (
          <City
            city={city.city}
            walk={city.name}
          />
        ))}
      </div>
    </div>
  );
}