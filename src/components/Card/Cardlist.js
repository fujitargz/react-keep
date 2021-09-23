import React from 'react';
import Card from './Card';
import useCards from '../../hooks/useCards';

const Cardlist = () => {
  const [cards] = useCards();

  const listItems = cards.map((card, index) => (
    <Card key={index} content={card.text} />
  ));

  return <div className='space-y-2'>{listItems}</div>;
};

export default Cardlist;
