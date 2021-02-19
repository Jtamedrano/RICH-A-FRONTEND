import { combineReducers } from 'redux';
import subReducer from './subReducer';

const allReducers = combineReducers({ subscriber: subReducer });

export default allReducers;
