import { connect } from 'react-redux';
import { LoginComponent } from './User.view';
import {doLogin} from '@shared-state'

export const LoginContainer = connect(
  (state: any) => {
    return {
      isLoading: state.user.isLoading,
      isLogged: state.user.isLogged,
      username: state.user.username,
    }
  },
  (dispatch: any) => {
    return {
      doLogin: (email: any, password: any) => {
        dispatch(doLogin(email, password))
      }
    }
  }
)(LoginComponent);
