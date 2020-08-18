import {
  SEARCH_FOR_LOCATION,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from '../actions';

//setting up search by location reducer

const initialState = {
  bridge_site: [],
  village_site: [],
  isSearching: false,
  error: null,
};

export const searchLocationReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case SEARCH_FOR_LOCATION:
      return {
        ...state,
        isSearching: true,
        error: action.payload,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        bridge_site: action.payload,
        village_site: action.payload,
        error: action.payload,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
