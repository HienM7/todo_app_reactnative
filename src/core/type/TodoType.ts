import { Todo } from "../entity";

export type TodoState = {
  isLoading: boolean;
  data: Array<Todo>;
  error: object;
};