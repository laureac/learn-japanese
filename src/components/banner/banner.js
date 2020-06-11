import React from 'react';
import './banner.scss';
import '../../style/button.scss';

function Banner() {
  return (
    <div className="main">
       <h1>Learn Japanese</h1>
       <p><span>Visiting the temples in Kyoto, getting a new job, 
           or making personnal connection </span><span>-no matter why you want to learn, 
           we have the right course for you. 
           </span></p>
        <p></p>
        <button className='btn'>Get Started</button>
    </div>
  );
}

export default Banner;