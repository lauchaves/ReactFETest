const USER_NOT_LOGGED = 'USER_NOT_LOGGED';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case USER_NOT_LOGGED: {
      return { isUserLogged: false};
    }
    default:
      return state;
  };
};
