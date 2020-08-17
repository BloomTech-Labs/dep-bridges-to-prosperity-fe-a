import axios from 'axios';

export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const FETCH_BRIDGES = 'FETCH_BRIDGES';

export const addBridge = newBridge => {
  return {
    type: ADD,
    payload: newBridge,
  };
};

export const editBridge = newBridge => {
  return {
    type: EDIT,
    payload: newBridge,
  };
};

export const fetchBridges = () => dispatch => {
  dispatch({ type: FETCH_BRIDGES });
  axios
    .get('http://localhost:8000/bridges/all')
    .then(res => {
      res.data.map(bridge => {
        return dispatch({ type: ADD, payload: bridge });
      });
    })
    .catch(err => {
      console.log('Error fetching data from fetchBridges action. ERR: ', err);
    });
};
