import {LOGIN_SUCCESS, LOGIN_FAIL} from '../models/constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS: 
      return { loginSuccess: true, response: action.payload};
    case LOGIN_FAIL: {
      return { loginSuccess: false};
    }
    default:
      return state;
  }
};

