import { USER_NOT_LOGGED } from '../models/constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case USER_NOT_LOGGED: {
      return { isUserLogged: false};
    }
    default:
      return state;
  }
};
