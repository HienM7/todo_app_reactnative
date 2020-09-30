import { TodoState } from '@core';
import { GET_TODO_LIST, GET_TODO_LIST_FAIL, GET_TODO_LIST_SUCCESS } from '../actions';

const INITIAL_STATE: TodoState = {
  isLoading: false,
  data: [],
  error: {},
};

// reducer
export const todoReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return Object.assign(
        {},
        state,
        {
          isLoading: true
        }
      );
    case GET_TODO_LIST_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          isLoading: false,
          data: action.data
        }
      );
    case GET_TODO_LIST_FAIL:
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
