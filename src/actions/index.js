import { LOGIN_FAIL, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_SUCCESS, USER_NOT_LOGGED } from '../models/constants';

export const login = model => {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  if (!storedUsers) return { type: LOGIN_FAIL };
  let isLogged=false;
  storedUsers.map( user => {
    if(user.email === model.email && user.password === model.password){
      isLogged=true;
    }
    return isLogged;
  });

  if (isLogged) {
    localStorage.setItem("userLogged", model.email);
    return {type: LOGIN_SUCCESS, payload: model.email};
  }
  else {
    return { type: LOGIN_FAIL };
  }
  };

 export const signUp = model => {

  let storedUsers = JSON.parse(localStorage.getItem("users"));
  
  if (!storedUsers) {
    storedUsers = [];
    storedUsers.push(model);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    return {type: SIGNUP_SUCCESS, payload: model};
  };

  let alreadyMember = false;
  storedUsers.map(user => {
    if(user.email === model.email){
      alreadyMember = true;
    }
    return alreadyMember;
  });

  if (alreadyMember) 
    return { type: SIGNUP_FAIL };
  else {
    storedUsers.push(model);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    return {type: SIGNUP_SUCCESS, payload: model.email};
  }
 }

 export const logout = () => {
   localStorage.removeItem("userLogged");
   return {type: USER_NOT_LOGGED};
}