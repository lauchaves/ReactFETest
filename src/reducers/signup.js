import * as constants from '../models/constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case constants.SIGNUP_SUCCESS: {
        return { signUpSuccess: true, response: action.payload};
    };
    case constants.SIGNUP__FAIL: {
        return { signUpSuccess: false};
    }
    default:
      return state;
  };
};

