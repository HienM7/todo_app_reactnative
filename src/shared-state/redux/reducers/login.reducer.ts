import {} from '@core'
import { State } from 'react-native-gesture-handler';
import { Action } from 'rxjs/internal/scheduler/Action';
import {GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL, getLogin} from '../actions';

const INITIAL_STATE: = {
    isLoading: false,
    data: [],
    error: {},
};

export const loginReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case GET_LOGIN: 
        return Object.assign(
            {},
            state,
            {
                isLoading: true
            }
        );
        case GET_LOGIN_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    isLoading: false,
                    data: action.data
                }
            );
        case GET_LOGIN_FAIL:
            return Object.assign(
                {},
                state,
                {
                    isLoading: false,
                    error: action.error
                }
            );
            default:
                break;
    };
    return state;
}