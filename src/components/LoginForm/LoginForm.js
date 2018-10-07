import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import '../../styles/client.scss';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      model: props.model
    };
  }

  setValue = (event, newValue, previousValue, name) => {
    let modelState = Object.assign({}, this.state);
    modelState.model[name] = newValue;
    this.setState(modelState);
   };

  render() {
      const { handleSubmit } = this.props;
      const model = this.state.model;
      const error = this.props.isLogged ? null : <center><label className={"text-center"}> Unable to authenticate. Try Again</label></center> ;


      return (
        <div className={"login-form"}>
            <form href="#" onSubmit={ (event)=> {event.preventDefault(); handleSubmit();}}>
            <h2 className={"text-center"}> Login</h2>
            <hr/>
              <Field
                className={"form-control"}
                value= {model.email}
                name="email"
                component="input"
                type="text"
                placeholder="Username"
                onChange={this.setValue}
              />
              <Field
                className={"form-control"}
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
              <div>
                <button className={"buttonCustom"} type="submit" label="submit">Login</button>
              </div>
              
            </form>
          </div>
      );
  }
}
  

 export default reduxForm({ form: 'login' })(LoginForm);