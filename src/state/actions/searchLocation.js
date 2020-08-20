import axios from 'axios';

export const SEARCH_FOR_LOCATION = 'SEARCH_FOR_LOCATION';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
//setting up a search by location action
export const searchLocation = () => dispatch => {
  dispatch({ type: SEARCH_FOR_LOCATION });
  //need to be able to hit that location for the search
  axios
    .get('https://bridges-a-api.herokuapp.com/bridges/search')
    .then(res => {
      dispatch({ type: SEARCH_SUCCESS, payload: res.data });
      return res.data;
    })
    .catch(err => {
      dispatch({ type: SEARCH_FAILURE, payload: err.response });
    });
};
