import React from 'react';
import CardInput from '../Card/CardInput';
import Cardlist from '../Card/Cardlist';

const Main = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <CardInput />
      <div>
        <Cardlist />
      </div>
    </div>
  );
};

export default Main;
