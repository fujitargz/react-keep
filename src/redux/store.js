import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './reducer';

export default configureStore({
  reducer: { cards: cardsSlice },
});
