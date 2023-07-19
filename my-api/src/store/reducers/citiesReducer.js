import * as actionTypes from '../actionTypes/actionTypes';
// Define a reducer function to handle state updates

const initialState = {
  citiesList: [],
  // Initial state properties
};

const citiesReducer = (state = initialState, action) => {
  // Handle different actions and update the state accordingly
  switch (action.type) {
    case actionTypes.FETCH_CITIES_SUCCESS:
      return {
        ...state,
        citiesList: action.payload,
      };
    case actionTypes.FETCH_CITIES_FAILURE:
      return {
        ...state,
        citiesList: [],
      };
    // Add more cases for other actions
    default:
      return state;
  }
};

export default citiesReducer;
