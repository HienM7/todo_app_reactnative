import { connect } from 'react-redux';
import { TodoComponent } from './todo.view';
import { getTodoList } from '@shared-state';

export const TodoContainer = connect(
  (state: any) => {
    const todo = state.todo;
    return {
      isLoading: todo.isLoading ? todo.isLoading : false,
      data: todo.data,
    }
  },
  (dispatch: any) => {
    return {
      getTodoList: () => {
        dispatch(getTodoList())
      }
    }
  }
)(TodoComponent);
