import { combineReducers } from 'redux';
import citiesReducer from './reducers';

const rootReducer = combineReducers({
  city: citiesReducer,

  // Add more reducers here if needed
});

export default rootReducer;
