import { combineReducers } from 'redux';
import authReducer from './auth.reducer'
import casesReducer from './cases.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    cases: casesReducer,
});

export default rootReducer;
