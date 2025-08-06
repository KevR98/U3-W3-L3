import { configureStore } from '@reduxjs/toolkit';
import mainReduce from '../reducers';

const store = configureStore({
  reducer: mainReduce,
});

export default store;
