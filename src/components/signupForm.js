import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { cf } from '../../style/client.scss';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  
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
      const { handleSubmit, isSignUp } = this.props;
      const model = this.state.model;
      console.log('form', isSignUp);
      const error = isSignUp ? null : 'Already Registered. Try Again';

      return (
        <div className={ cf("centerContainer") }>
          <div className = { cf("containerStyle") }>
            <form href="#" onSubmit={ (event)=> {event.preventDefault(); handleSubmit();}}>
              <Field
                value= {model.email}
                name="email"
                component="input"
                type="text"
                placeholder="username"
                onChange={this.setValue}
              />
              <Field
              value= {model.password}
                name="password"
                component="input"
                type="password"
                placeholder="Password"
                onChange={this.setValue}
              />
              {error}
              <button type="submit" label="submit">Create Account</button>
            </form>
          </div>
        </div>
      );
  }
}
  

 export default reduxForm({ form: 'signup' })(SignUpForm);