import { combineReducers } from 'redux';
import { todoReducer, userReducer } from './reducers';

const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});

export default rootReducer;