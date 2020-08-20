import {
  GET_BRIDGE_DATA_START,
  GET_BRIDGE_DATA_FAILURE,
  GET_BRIDGE_DATA_SUCCESS,
  ADD_BRIDGE_DATA_START,
  ADD_BRIDGE_DATA_SUCCESS,
  ADD_BRIDGE_DATA_FAILURE,
  EDIT_BRIDGE_DATA_START,
  EDIT_BRIDGE_DATA_SUCCESS,
  EDIT_BRIDGE_DATA_FAILURE,
  GET_SINGLE_BRIDGE,
  SEARCH_BRIDGE_START,
  SEARCH_BRIDGE_SUCCESS,
  SEARCH_BRIDGE_FAILURE,
} from '../actions';

const initialState = {
  bridgeData: [],
  loading: false,
  error: '',
};

export const bridgeSitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRIDGE_DATA_START:
      return {
        ...state,
        loading: true,
      };

    case GET_BRIDGE_DATA_SUCCESS:
      return {
        ...state,
        bridgeData: action.payload,
        loading: false,
      };

    case GET_BRIDGE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_BRIDGE_DATA_START:
      return {
        ...state,
        loading: true,
      };

    case ADD_BRIDGE_DATA_SUCCESS:
      return {
        ...state,
        bridgeData: [...state.bridgeData, action.payload],
        loading: false,
      };

    case ADD_BRIDGE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case EDIT_BRIDGE_DATA_START:
      return {
        ...state,
        loading: true,
      };

    case EDIT_BRIDGE_DATA_SUCCESS:
      return {
        ...state,
        bridgeData: state.bridgeData.map(bridge =>
          bridge.id === action.payload.id ? action.payload : bridge
        ),
        // bridgeData: [...state.bridgeData, action.payload],
        loading: false,
      };

    case EDIT_BRIDGE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_SINGLE_BRIDGE:
      return {
        ...state,
        bridgeData: [action.payload],
      };

    case SEARCH_BRIDGE_START:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_BRIDGE_SUCCESS:
      return {
        ...state,
        bridgeData: action.payload,
      };
    case SEARCH_BRIDGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
