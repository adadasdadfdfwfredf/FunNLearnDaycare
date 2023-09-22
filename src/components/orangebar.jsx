import React from 'react';

const Orangebar = ({ color, height }) => {
  const barStyle = {
    backgroundColor: color || '#ff8c24',
    height: height || '150px', 
  };

  return <div className='orangebar' style={barStyle}></div>;
};

export default Orangebar;