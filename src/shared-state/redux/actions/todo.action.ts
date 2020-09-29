// actions type
export const GET_TODO_LIST = "GET_TODO_LIST";
export const GET_TODO_LIST_SUCCESS = "GET_TODO_LIST_SUCCESS";
export const GET_TODO_LIST_FAIL = "GET_TODO_LIST_FAIL";

// actions creator
export const getTodoList = () => ({
  type: GET_TODO_LIST,
});