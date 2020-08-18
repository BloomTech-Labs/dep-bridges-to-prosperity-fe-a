import axios from 'axios';
export const GET_MAP_DATA_START = 'GET_MAP_START';
export const GET_MAP_DATA_SUCCESS = 'GET_MAP_SUCCESS';
export const GET_MAP_DATA_FAILURE = 'GET_MAP_FAILURE';

export const getAllMapData = () => dispatch => {
  dispatch({
    type: GET_MAP_DATA_START,
  });
  axios
    .get('https://bridges-a-api.herokuapp.com/bridges/all')
    .then(response => {
      dispatch({
        type: GET_MAP_DATA_SUCCESS,
        payload: response.data,
      });
    })
    .catch(err => {
      console.log('axios error', err);
      dispatch({
        type: GET_MAP_DATA_FAILURE,
        payload: err.message,
      });
    });
};
