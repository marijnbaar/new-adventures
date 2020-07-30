import React, {Component} from 'react';

class Hotspot extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.action}</h1>
        <p>{this.props.suggestion}</p>
      </div>
    )
  }  
}

export default Hotspot;
