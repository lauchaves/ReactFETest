import * as constants from '../models/constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case constants.USER_NOT_LOGGED: {
      return { isUserLogged: false};
    }
    default:
      return state;
  };
};
