import { all, fork } from 'redux-saga/effects';
import { watchGetTodoList, watchDoLogin } from './sagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetTodoList),
    fork(watchDoLogin),
  ]);
}