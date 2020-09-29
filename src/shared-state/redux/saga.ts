import { all, fork } from 'redux-saga/effects';
import { watchGetTodoList } from './sagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetTodoList),
  ]);
}