import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  counterReducer1: require('./counterReducer1').reducer,
  counterReducer2: require('./counterReducer2').reducer,
})
export default rootReducer
