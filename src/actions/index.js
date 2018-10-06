import * as constants from '../models/constants';

export const login = model => {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  if (!storedUsers) return { type: constants.LOGIN__FAIL };
  let isLogged=false;
  storedUsers.map( user => {
    if(user.email === model.email && user.password === model.password){
      isLogged=true;
    }
  });

  if (isLogged) {
    localStorage.setItem("userLogged", model.email);
    return {type: constants.LOGIN_SUCCESS, payload: model.email};
  }
  else {
    return { type: constants.LOGIN__FAIL };
  }
  };

 export const signUp = model => {

  let storedUsers = JSON.parse(localStorage.getItem("users"));
  
  if (!storedUsers) {
    storedUsers = [];
    storedUsers.push(model);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    return {type: constants.SIGNUP_SUCCESS, payload: model};
  };

  let alreadyMember = false;
  storedUsers.map(user => {
    if(user.email === model.email){
      alreadyMember = true;
    }
  });

  if (alreadyMember) 
    return { type: constants.SIGNUP__FAIL };
  else {
    storedUsers.push(model);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    return {type: constants.SIGNUP_SUCCESS, payload: model.email};
  }
 }

 export const logout = () => {
   localStorage.removeItem("userLogged");
   return {type: constants.USER_NOT_LOGGED};
}