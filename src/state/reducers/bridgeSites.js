import { ADD, EDIT, FETCH_BRIDGES } from '../actions';

const initialState = [];

export const bridgeSites = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case EDIT:
      return state.map(bridge => {
        if (bridge.id === action.payload.id) {
          return action.payload;
        }
        return bridge;
      });
    case FETCH_BRIDGES:
      return [...state];
    default:
      return state;
  }
};
