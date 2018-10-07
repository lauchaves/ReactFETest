import {SIGNUP_FAIL, SIGNUP_SUCCESS} from '../models/constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SIGNUP_SUCCESS: 
        return { signUpSuccess: true, response: action.payload};
    case SIGNUP_FAIL: {
        return { signUpSuccess: false};
    }
    default:
      return state;
  }
};
