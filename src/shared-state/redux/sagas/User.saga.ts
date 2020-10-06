
import { put, takeLatest } from 'redux-saga/effects';
import { User } from '@core';
import firestore from '@react-native-firebase/firestore';
import { DO_LOGIN, DO_LOGIN_SUCCESS, DO_LOGIN_FAIL, } from '../actions';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';



function* doLogin(action: object) {
    try {
        const { email, password }: { email?: any, password?: any } = action;
        yield auth()
            .signInWithEmailAndPassword(email, password);
            const user = yield auth().currentUser;
            console.log(user.uid);
            const doc = yield firestore().collection("Users").doc(user.uid).get();
            console.log(doc.data());
            const username = doc.data().username;
            Alert.alert(
                        "Notifycation",
                        "Logged in successfully",
                        [
                          { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }
                        );
                  
        yield put({ type: DO_LOGIN_SUCCESS, username });
        
    }
    catch (error) {
        Alert.alert(
            "Notifycation",
                "Logged failed",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              ); 
        yield put({ type: DO_LOGIN_FAIL, error: error });
    }
}
export function* watchDoLogin() {
    yield takeLatest(DO_LOGIN, doLogin);
  }