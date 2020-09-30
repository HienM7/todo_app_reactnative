import { Todo } from '@core';

export type TodoState = {
  isLoading: boolean;
  data: Array<Todo>;
  error: object;
};