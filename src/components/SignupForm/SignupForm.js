import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import '../../styles/client.scss';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  
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
      const { handleSubmit, isSignUp } = this.props;
      const model = this.state.model;
      const error = isSignUp ? null : <center><label className={"text-center"}>Already Registered. Try Again</label></center>;

      return (
        <div className={"login-form"}>
            <form href="#" onSubmit={ (event)=> {event.preventDefault(); handleSubmit();}}>
            <h2 className={"text-center"}> Sign Up</h2>
            <p className={"text-center"}>It's free and only takes a minute.</p>
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
                  <p style={{textAlign: "center"}}>Already a member? <Link to={'/login'}>Login.</Link></p>
              </div>
              <div>
                <button className={"buttonCustom"} type="submit" label="submit">Create Account</button>
              </div>
              <p className="small text-center">By clicking the Create Account, you agree to our <br/><a>Terms &amp; Conditions</a>, and <a>Privacy Policy</a></p>
            </form>
          </div>
      );
  }
}
  

 export default reduxForm({ form: 'signup' })(SignUpForm);