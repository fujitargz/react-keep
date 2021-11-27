import { createSlice } from '@reduxjs/toolkit';

const now = new Date();
const anHourLater = new Date(now.setHours(now.getHours() + 1));

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: [
    {
      text: 'example card',
      label: '',
      dueDate: null,
    },
    {
      text: 'card with label',
      label: 'example',
      dueDate: null,
    },
    {
      text: 'card with due date',
      label: '',
      dueDate: anHourLater,
    },
  ],
  reducers: {
    add: (state, action) => Array.from(new Set([...state, action.payload])),
    remove: (state, action) =>
      state.filter((card) => card.text !== action.payload),
  },
});

export const selectCards = (state) => state.cards;
export const selectLabels = (state) =>
  state.cards.map((card) => card.label).filter((label) => label !== '');

export const { add, remove } = cardsSlice.actions;

export default cardsSlice.reducer;
