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
  SEARCH_BRIDGE,
  PAGINATE_BRIDGES,
  PAGINATE_BRIDGES_FAILURE,
} from '../actions';

const initialState = {
  bridgeData: [],
  searchData: [],
  loading: false,
  error: '',
  searching: false,
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

    case SEARCH_BRIDGE:
      return {
        ...state,

        bridgeData: state.bridgeData.filter(
          info =>
            info.name
              .toLowerCase()
              .trim()
              .includes(action.payload.toLowerCase().trim()) ||
            // info.type
            //   .toLowerCase()
            //   .trim()
            //   .includes(action.payload.toLowerCase().trim())
            // ||
            info.stage
              .toLowerCase()
              .trim()
              .includes(action.payload.toLowerCase().trim())
        ),

        searching: true,
      };
    case PAGINATE_BRIDGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PAGINATE_BRIDGES:
      return {
        ...state,
        bridgeData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
