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
  axios
    .get('http://localhost:8000/bridges/all')
    .then(res => {
      dispatch({ type: FETCH_BRIDGES, payload: res.data });
    })
    .catch(err => {
      console.log('Error fetching data from fetchBridges action. ERR: ', err);
    });
};

export const post = newBridge => dispatch => {
  axios
    .post('http://localhost:8000/bridge/add', newBridge)
    .then(res => {
      console.log('New bridge site added: ', newBridge);
      axios
        .get('http://localhost:8000/bridges/all')
        .then(res => {
          dispatch({ type: FETCH_BRIDGES, payload: res.data });
        })
        .catch(err => {
          console.log(
            'Error fetching data from fetchBridges action. ERR: ',
            err
          );
        });
    })
    .catch(err => {
      console.log('Error adding bridge: ', err);
    });
};

export const patch = newBridge => dispatch => {
  axios
    .patch(`http://localhost:8000/bridges/${newBridge.id}`, newBridge)
    .then(res => {
      console.log('Bridge site edited: ', newBridge);
      axios
        .get('http://localhost:8000/bridges/all')
        .then(res => {
          dispatch({ type: FETCH_BRIDGES, payload: res.data });
        })
        .catch(err => {
          console.log(
            'Error fetching data from fetchBridges action. ERR: ',
            err
          );
        });
    })
    .catch(err => {
      console.log('Error adding bridge: ', err);
    });
};
