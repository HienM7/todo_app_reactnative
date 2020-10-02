import {connect} from 'react-redux';
import {RegisterComponent} from './register.view';
import {doRegister} from '@shared-state';

export const RegisterContainer = connect(null, (dispatch: any) => {
  return {
    doRegister: (email: any, password: any, username: any) => {
      dispatch(doRegister(email, password, username));
    },
  };
})(RegisterComponent);
