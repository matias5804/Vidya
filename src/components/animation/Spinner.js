import React from 'react';
import Lottie from 'react-lottie';
import spinner from '../animation/spinner.json'
import "../styles/styles.css"
const Loader = () => {

  const defaultOption = {
    loop: true,
    autoplay:true,
    animationData: spinner,
    rendererSettings: {
      preserveAspectRatio:"xMidYMid slice",
    }
  };

  return <div className='loader'>
      <Lottie options={defaultOption} />
  </div>;
};

export default Loader;
