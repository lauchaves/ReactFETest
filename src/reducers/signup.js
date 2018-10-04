const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
const SIGNUP__FAIL = 'SIGNUP__FAIL';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case SIGNUP_SUCCESS: {
        return { signUpSuccess: true, response: action.payload};
    };
    case SIGNUP__FAIL: {
        return { signUpSuccess: false};
    }
    default:
      return state;
  };
};

