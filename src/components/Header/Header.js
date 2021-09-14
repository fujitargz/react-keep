import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='flex flex-row p-5 w-screen border-b-2'>
      <div className='flex items-center'>
        <FontAwesomeIcon icon={faTasks} size='2x' className='mr-8' />
        <h1 className='font-mono text-4xl font-bold'>React Keep</h1>
      </div>
    </header>
  );
};

export default Header;
