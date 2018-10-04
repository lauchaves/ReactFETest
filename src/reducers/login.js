const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN__FAIL = 'LOGIN__FAIL';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return { loginSuccess: true, response: action.payload};
    };
    case LOGIN__FAIL: {
      return { loginSuccess: false};
    }
    default:
      return state;
  };
};

