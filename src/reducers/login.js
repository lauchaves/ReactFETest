import * as constants from '../models/constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case constants.LOGIN_SUCCESS: {
      return { loginSuccess: true, response: action.payload};
    };
    case constants.LOGIN__FAIL: {
      return { loginSuccess: false};
    }
    default:
      return state;
  };
};

