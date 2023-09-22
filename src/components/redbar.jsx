import React from 'react';

const Redbar = ({ color, height }) => {
  const barStyle = {
    backgroundColor: color || '#dc3c3a',
    height: height || '150px', 
  };

  return <div className='redbar' style={barStyle}></div>;
};

export default Redbar;