import { combineReducers } from 'redux';
import { searchLocationReducer } from './reducers/searchLocationReducer';
import { bridgeSitesReducer } from './reducers/bridgeSitesReducer';

// Using combine reducers to break up reducers into different files
export default combineReducers({
  searchLocationReducer,
  bridgeSitesReducer,
});
