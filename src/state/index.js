import { combineReducers } from 'redux';
import { counter } from './reducers/counter';
import { searchLocation } from './reducers/searchLocation';
import { mapDataReducer } from './reducers/bridgeSitesReducer';

// Using combine reducers to break up reducers into different files
export default combineReducers({
  counter,
  searchLocation,
  mapDataReducer,
});
