import { combineReducers } from 'redux';
import Login from './login';
import SignUp from './signup';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    login: Login,
    signUp: SignUp,
    form: formReducer,
});

export default rootReducer;
