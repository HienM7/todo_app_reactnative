import { all, fork } from 'redux-saga/effects';
import { watchGetTodoList, watchDoRegister, watchDoLogin } from './sagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetTodoList),
    fork(watchDoRegister),
    fork(watchDoLogin),
  ]);
}
