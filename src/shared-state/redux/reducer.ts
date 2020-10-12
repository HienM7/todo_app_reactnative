import { combineReducers } from 'redux';
import { todoReducer, loginReducer } from './reducers';

const rootReducer = combineReducers({
  todo: todoReducer,
  user: loginReducer,
});

export default rootReducer;