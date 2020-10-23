import { UserState } from "../../../core/type";
import { REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actions";

const INITIAL_STATE: UserState = {
  isLoading: false,  
  isLogged: false,
  username: '',
};

// reducer
export const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case REGISTER:
      return Object.assign(
        {},
        state,
        {
          isLoading: true
        }
      );
    case REGISTER_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          isLogged: true,
          username: action.username

        }
      );
    case REGISTER_FAIL:
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          error: action.error
        }
      );
    default:
      break;
  }
  return state;
};
