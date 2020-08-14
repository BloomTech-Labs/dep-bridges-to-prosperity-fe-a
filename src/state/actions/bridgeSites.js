export const ADD = 'ADD';
export const EDIT = 'EDIT';

export const addBridge = newBridge => {
  return {
    type: ADD,
    payload: newBridge,
  };
};

export const editBridge = bridgeToEdit => {
  return {
    type: EDIT,
    payload: bridgeToEdit,
  };
};
