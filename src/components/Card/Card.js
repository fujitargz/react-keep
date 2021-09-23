import React from 'react';

const Card = (props) => {
  return (
    <div className='py-2 px-4 mt-2 rounded-md border border-gray-400'>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
