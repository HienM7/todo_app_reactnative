import { connect } from 'react-redux';
import { LoginComponent } from './login.view';
import {getLogin} from '@shared-state'

export const LoginContainer = connect(
  (state: any) => {
    return {

    }
  },
  (dispatch: any) => {
    return {
      getLogin: () => {
        dispatch(getLogin())
      }
    }
  }
)(LoginComponent);
