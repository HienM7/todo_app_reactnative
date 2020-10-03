import { put, takeLatest } from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions';
import { User } from 'src/core/entity';

function* doRegister(action: object) {
  try {
    const { email, password, username }: {email?: any; password?: any; username?: any } = action;
    yield auth().createUserWithEmailAndPassword(email, password);
    const user = yield auth().currentUser;
    yield firestore().collection('users').doc(user.uid)
      .set({
          username: username,
          email: email,
          password: password,
      })
    yield put({ type: REGISTER_SUCCESS, email, password});
  }
  catch (error) {
    yield put({ type: REGISTER_FAIL, error: error });
  }
}

export function* watchDoRegister() {
  yield takeLatest(REGISTER, doRegister);
}
