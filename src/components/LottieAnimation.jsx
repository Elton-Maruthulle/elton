import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/developer.json'; 

export default function LottieAnimation() {
  return (
    <div className="w-40 h-40 mx-auto">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
