import axios from 'axios';

export const GET_BRIDGE_DATA_START = 'GET_BRIDGE_DATA_START';
export const GET_BRIDGE_DATA_SUCCESS = 'GET_BRIDGE_DATA_SUCCESS';
export const GET_BRIDGE_DATA_FAILURE = 'GET_BRIDGE_DATA_FAILURE';

export const GET_ONE_BRIDGE_DATA_START = 'GET_ONE_BRIDGE_DATA_START';
export const GET_ONE_BRIDGE_DATA_SUCCESS = 'GET_ONE_BRIDGE_DATA_SUCCESS';
export const GET_ONE_BRIDGE_DATA_FAILURE = 'GET_ONE_BRIDGE_DATA_FAILURE';

export const ADD_BRIDGE_DATA_START = 'ADD_BRIDGE_DATA_START';
export const ADD_BRIDGE_DATA_SUCCESS = 'ADD_BRIDGE_DATA_SUCCESS';
export const ADD_BRIDGE_DATA_FAILURE = 'ADD_BRIDGE_DATA_FAILURE';

export const EDIT_BRIDGE_DATA_START = 'EDIT_BRIDGE_START';
export const EDIT_BRIDGE_DATA_SUCCESS = 'EDIT_BRIDGE_SUCCESS';
export const EDIT_BRIDGE_DATA_FAILURE = 'EDIT_BRIDGE_FAILURE';

export const GET_SINGLE_BRIDGE = 'GET_SINGLE_BRIDGE';

export const SEARCH_BRIDGE_START = 'SEARCH_BRIDGE_START';
export const SEARCH_BRIDGE_SUCCESS = 'SEARCH_BRIDGE_START';
export const SEARCH_BRIDGE_FAILURE = 'SEARCH_BRIDGE_START';

export const getSingleBridge = bridge => dispatch => {
  dispatch({ type: GET_SINGLE_BRIDGE, payload: bridge });
};

export const getAllBridges = () => dispatch => {
  dispatch({
    type: GET_BRIDGE_DATA_START,
  });
  axios
    .get('https://bridges-a-api.herokuapp.com/bridgesall')
    .then(res => {
      dispatch({ type: GET_BRIDGE_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: GET_BRIDGE_DATA_FAILURE,
        payload: err.message,
      });
    });
};

export const getOneBridge = () => dispatch => {
  dispatch({
    type: GET_ONE_BRIDGE_DATA_START,
  });
  axios
    .get('https://bridges-a-api.herokuapp.com/bridgesall')
    .then(res => {
      dispatch({ type: GET_ONE_BRIDGE_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: GET_ONE_BRIDGE_DATA_FAILURE,
        payload: err.message,
      });
    });
};

export const addNewBridge = newBridge => dispatch => {
  dispatch({
    type: ADD_BRIDGE_DATA_START,
  });
  axios
    .post('http://localhost:8000/bridges/add', newBridge)
    .then(res => {
      console.log('add bridge res:', res);
      dispatch({
        type: ADD_BRIDGE_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_BRIDGE_DATA_FAILURE,
        payload: err.message,
      });
    });
};

export const editBridge = bridge => dispatch => {
  dispatch({
    type: EDIT_BRIDGE_DATA_START,
  });
  axios
    .patch(`https://bridges-a-api.herokuapp.com/bridges/${bridge.id}`, bridge)
    .then(res => {
      dispatch({
        type: EDIT_BRIDGE_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: EDIT_BRIDGE_DATA_FAILURE,
        payload: err.message,
      });
    });
};

export const searchBridge = bridge => dispatch => {
  dispatch({
    type: SEARCH_BRIDGE_START,
  });
  //need to be able to hit that location for the search
  axios
    .get('https://bridges-a-api.herokuapp.com/bridges', bridge)
    .then(res => {
      dispatch({ type: SEARCH_BRIDGE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SEARCH_BRIDGE_FAILURE, payload: err.response });
    });
};
