const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN__FAIL = 'LOGIN__FAIL';
const SIGNUP_SUCCESS ='SIGNUP_SUCCESS';
const SIGNUP__FAIL = 'SIGNUP__FAIL';

export const login = model => {
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  if (!storedUsers) return { type: LOGIN__FAIL };
  let isLogged=false;
  storedUsers.map( user => {
    if(user.email === model.email && user.password === model.password){
      isLogged=true;
    }
  });

  if (isLogged) {
    console.log('islogged true');
    return {type: LOGIN_SUCCESS, payload: model.email};
  }
  else {
    return { type: LOGIN__FAIL };
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
  });

  if (alreadyMember) 
    return { type: SIGNUP__FAIL };
  else {
    storedUsers.push(model);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    return {type: SIGNUP_SUCCESS, payload: model.email};
  }
 }