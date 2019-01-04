import {SIGN_OUT, SIGN_IN} from '../../actions/auth';

export default function authReducer(state, action) {
    switch (action.type) {
        case SIGN_OUT:
            return {...state, };
        case SIGN_IN:
            return '';
        default:
            return state;
    }
}