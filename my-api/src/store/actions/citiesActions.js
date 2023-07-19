import axios from 'axios';
import {
  //   FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE,
} from '../actionTypes/actionTypes';

export const showCity = () => {
  const API_URL = 'https://randomuser.me/api/?results=5';

  return async (dispatch) => {
    try {
      const response = await axios.get(API_URL);
      dispatch({
        type: FETCH_CITIES_SUCCESS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({ type: FETCH_CITIES_FAILURE, payload: error });
    }
  };
};
