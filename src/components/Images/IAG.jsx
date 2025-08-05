import React from 'react';
import IAG from '../../assets/Images/IAG.png';

const IAGComponent = () => (
  <div className="flex items-center justify-center">
    <img
      src={IAG}
      alt="Logo IAG"
      className="h-16 md:h-32 object-contain"
    />
  </div>
);

export default IAGComponent;
