import {Alert} from 'react-native';
import { put, takeLatest } from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL } from '../actions';

export interface Action{
  type: string,
  email: string,
  password: string,
  username: string,
}

function* doRegister(action: Action) {
  try {
    const { email, password, username } = action;
    yield auth().createUserWithEmailAndPassword(email, password);
    const user = yield auth().currentUser;
    yield firestore().collection('Users').doc(user.uid)
      .set({
          username: username,
          email: email,
          password: password,
      });
    yield put({ type: REGISTER_SUCCESS, username});
    Alert.alert(
      "Thông báo",
      "Đăng ký thành công",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
  catch (error) {
    yield put({ type: REGISTER_FAIL, error: error });
    Alert.alert(
      "Thông báo",
      "Đăng ký thất bại",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
}

export function* watchDoRegister() {
  yield takeLatest(REGISTER, doRegister);
}
