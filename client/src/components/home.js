
import React from 'react';

function Home (props) {
  return (
    <div>
    <strong>{props.title}</strong>
    <div className="image">
    <p className="home-p"> Wabi Sabi Shop App is a place where you can't buy anything. But you can see bunch of random mugs and also ... practice React! </p>
    </div>
    </div>
  )
}

export default Home;