import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { cf } from '../../styles/client.scss';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      model: props.model
    };
  }

  setValue = (event, newValue, previousValue, name) => {
    this.state.model[name] = newValue;
   };

  render() {
      const { handleSubmit } = this.props;
      const model = this.state.model;
      const error = this.props.isLogged ? null : <center><label className={"text-center"}> Unable to authenticate. Try Again</label></center> ;


      return (
        <div className={cf("login-form")}>
            <form href="#" onSubmit={ (event)=> {event.preventDefault(); handleSubmit();}}>
            <h2 className={"text-center"}> Login</h2>
            <hr/>
              <Field
                className={cf("form-control")}
                value= {model.email}
                name="email"
                component="input"
                type="text"
                placeholder="Username"
                onChange={this.setValue}
              />
              <Field
                className={cf("form-control")}
                value= {model.password}
                name="password"
                component="input"
                type="password"
                placeholder="Password"
                onChange={this.setValue}
              />
              {error}
              <div>
                  <p className={"text-center"}>Not a Member? <Link to={'/sign-up'}>Sign Up.</Link></p>
              </div>
              <div className={cf("form-control")}>
                <button className={cf("buttonCustom")} type="submit" label="submit">Login</button>
              </div>
              
            </form>
          </div>
      );
  }
}
  

 export default reduxForm({ form: 'login' })(LoginForm);