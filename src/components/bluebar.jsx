import React from 'react';

const Bluebar = ({ color, height }) => {
  const barStyle = {
    backgroundColor: color || '#3f97d9',
    height: height || '150px', 
  };

  return <div className='bluebar' style={barStyle}></div>;
};

export default Bluebar;