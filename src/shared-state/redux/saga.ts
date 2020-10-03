import { all, fork } from 'redux-saga/effects';
import { watchGetTodoList, watchDoRegister } from './sagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetTodoList),
    fork(watchDoRegister),
  ]);
}