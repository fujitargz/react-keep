import React from 'react';
import CardInput from '../Card/CardInput';
import Card from '../Card/Card';

const Main = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <CardInput />
      <div>
        <Card content='Cardコンポーネント1' />
        <Card content='Cardコンポーネント2' />
      </div>
    </div>
  );
};

export default Main;
