import {
  GET_MAP_DATA_START,
  GET_MAP_DATA_FAILURE,
  GET_MAP_DATA_SUCCESS,
} from '../actions';

const initialState = {
  mapData: [],
  loading: false,
  error: '',
};

export const mapDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAP_DATA_START:
      return {
        ...state,
        loading: true,
      };

    case GET_MAP_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_MAP_DATA_SUCCESS:
      return {
        ...state,
        mapData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
