import { combineReducers } from 'redux';
import appReducer from './sagas/app/reducer';

export default combineReducers({ appReducer });
