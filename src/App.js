import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-row mx-5 mt-3'>
        <div className='mr-3'>
          <Menu />
        </div>
        <div className='mx-auto'>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
