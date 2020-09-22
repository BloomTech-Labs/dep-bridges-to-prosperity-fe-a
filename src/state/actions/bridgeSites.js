import axios from 'axios';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

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
export const GET_SINGLE_BRIDGE_LOADING = 'GET_SINGLE_BRIDGE_LOADING';

export const SEARCH_BRIDGE = 'SEARCH_BRIDGE';
export const FILTER_DATA = 'FILTER_DATA';

export const PAGINATE_BRIDGES = 'PAGINATE_BRIDGES';
export const PAGINATE_BRIDGES_FAILURE = 'PAGINATE_BRIDGES_FAILURE';
export const PAGINATE_BRIDGES_LOADING = 'PAGINATE_BRIDGES_LOADING';

export const getSingleBridge = bridge => dispatch => {
  // dispatch({ type: GET_SINGLE_BRIDGE_LOADING });
  dispatch({ type: GET_SINGLE_BRIDGE, payload: bridge });
};

export const getAllBridges = () => dispatch => {
  let apiURL = 'https://bridges-a-api.herokuapp.com/bridges';
  dispatch({
    type: GET_BRIDGE_DATA_START,
  });
  axios
    .get(process.env.REACT_APP_API_URI + '/bridges/all')
    .then(res => {
      dispatch({
        type: GET_BRIDGE_DATA_SUCCESS,
        payload: res.data.filter(site => site.latitude && site.longitude),
      });
    })
    .catch(err => {
      console.log('DISPATCH GET ALL', err.message);
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
    .get(process.env.REACT_APP_API_URI + '/bridges/all')
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

export const addNewBridge = (newBridge, idToken) => dispatch => {
  dispatch({
    type: ADD_BRIDGE_DATA_START,
  });
  axiosWithAuth(idToken)
    .post('/bridges/add', newBridge)
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

export const editBridge = (bridge, idToken) => dispatch => {
  dispatch({
    type: EDIT_BRIDGE_DATA_START,
  });
  axiosWithAuth(idToken)
    .patch(`/bridges/${bridge.id}`, bridge)
    .then(() => {
      axios.get(process.env.REACT_APP_API_URI + '/bridges/all').then(res => {
        dispatch({
          type: GET_BRIDGE_DATA_SUCCESS,
          payload: res.data.filter(site => site.latitude && site.longitude),
        });
        dispatch({
          type: EDIT_BRIDGE_DATA_SUCCESS,
          payload: res.data,
        });
      });
    })
    .catch(err => {
      dispatch({
        type: EDIT_BRIDGE_DATA_FAILURE,
        payload: err.message,
      });
    });
};

export const searchBridge = search => dispatch => {
  //
  //need to be able to hit that location for the search

  dispatch({ type: SEARCH_BRIDGE, payload: search });
};

export const paginateBridges = (page, limit) => dispatch => {
  dispatch({
    type: PAGINATE_BRIDGES_LOADING,
  });
  axios
    .get(
      process.env.REACT_APP_API_URI +
        `/bridge/paginate?page=${page}&limit=${limit}`,
      page,
      limit
    )
    .then(res => {
      dispatch({ type: PAGINATE_BRIDGES, payload: res.data });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: PAGINATE_BRIDGES_FAILURE,
        payload: err.message,
      });
    });
};

export const filterData = cache => dispatch => {
  dispatch({
    type: GET_BRIDGE_DATA_START,
  });
  axios
    .get(process.env.REACT_APP_API_URI + '/bridges/all')
    .then(async res => {
      await dispatch({
        type: GET_BRIDGE_DATA_SUCCESS,
        payload: res.data.filter(site => site.latitude && site.longitude),
      });
      dispatch({ type: FILTER_DATA, payload: cache });
    })
    .catch(err => {
      console.log('DISPATCH GET ALL', err.message);
      dispatch({
        type: GET_BRIDGE_DATA_FAILURE,
        payload: err.message,
      });
    });
};
