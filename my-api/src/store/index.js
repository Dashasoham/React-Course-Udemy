import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './reducers/citiesReducer';

// Create the Redux store
const store = configureStore({
  reducer: {
    city: citiesReducer,
  },
});

export default store;
