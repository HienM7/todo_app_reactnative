import { put, takeLatest } from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import { GET_TODO_LIST, GET_TODO_LIST_FAIL, GET_TODO_LIST_SUCCESS } from '../actions';
import { Todo } from 'src/core/entity';

function* getTodoList() {
  try {
    let rs: Array<Todo> = [];
    yield firestore()
      .collection('Todo')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          const item = {
            id: documentSnapshot.id,
            content: documentSnapshot.data().content,
            completed: documentSnapshot.data().completed
          };
          rs.push(item);
        });
      });
    yield put({ type: GET_TODO_LIST_SUCCESS, data: rs });
  }
  catch (error) {
    yield put({ type: GET_TODO_LIST_FAIL, error: error });
  }
}

export function* watchGetTodoList() {
  yield takeLatest(GET_TODO_LIST, getTodoList);
}