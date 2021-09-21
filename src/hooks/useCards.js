import { useState } from 'react';

const now = new Date();
const anHourLater = new Date(now.setHours(now.getHours() + 1));

const initCards = [
  { text: 'example card' },
  { text: 'card with label', label: 'example' },
  { text: 'card with due date', dueDate: anHourLater },
];

const useCards = () => {
  const [cards, setCards] = useState(initCards);
  return [cards, setCards];
};

export default useCards;
