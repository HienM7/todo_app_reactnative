import { connect } from 'react-redux';
import { GetStartedComponent } from './getstarted.view';
import { getTodoList } from '@shared-state';

export const GetStartedContainer = connect(
  (state: any) => {
    return {

    }
  },
  (dispatch: any) => {
    return {
      
      }
    }
)(GetStartedComponent);
