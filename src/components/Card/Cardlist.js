import React from 'react';
import { useSelector } from 'react-redux';
import { selectCards } from '../../redux/reducer';
import Card from './Card';

const Cardlist = () => {
  const cards = useSelector(selectCards);

  const listItems = cards.map((card, index) => (
    <Card key={index} content={card.text} />
  ));

  return <div className='space-y-2'>{listItems}</div>;
};

export default Cardlist;
