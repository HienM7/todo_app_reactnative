import { combineReducers } from 'redux';
import { todoReducer, userReducer, loginReducer } from './reducers';

const rootReducer = combineReducers({
  todo: todoReducer,
  userRegister: userReducer,
  user: loginReducer,
});

export default rootReducer;