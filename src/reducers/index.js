import { combineReducers } from 'redux';
import Login from './login';
import SignUp from './signup';
import UserLogged from './userLogged';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    login: Login,
    signUp: SignUp,
    form: formReducer,
    userLogout: UserLogged,
});

export default rootReducer;
