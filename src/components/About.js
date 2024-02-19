// About.js
import React from 'react';

function About({ about, image }) {
  return (
    <div>
      <p>{about}</p>
      <img src={image} alt="blog logo" />
    </div>
  );
}

export default About;
