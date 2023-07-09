import React from 'react';

const Hero = () => {
  return (
    <div className="container-fliud bg-dark text-white d-flex justify-content-center align-items-center flex-column" style={{height: "50vh"}}>
      <h1 style={{fontSize:"50px", color:"yellow"}}>News Hub</h1>
      <h5>The website is built with NewsAPI</h5>
    </div>
  );
};

export default Hero;
