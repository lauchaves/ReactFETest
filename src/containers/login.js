import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../components/loginForm';
import { login } from '../actions/index';
import { userModel } from '../models/user';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          model: userModel,
          isLogged: true,
          redirect: false,
        };
    }

    componentWillReceiveProps(nextProps){
      if (nextProps.response.loginSuccess == true ) {
        this.setState({redirect: true});
        return;
      }
      this.setState({ isLogged: !this.state.isLogged });
      return;
    }

    handleSubmit = () =>  {
        this.props.login(this.state.model);
    };
   
    render() {
      const { redirect } = this.state;
      if(redirect){
        return <Redirect to='/reports'/>
      }
      return <LoginForm isLogged={this.state.isLogged} model={this.state.model}  handleSubmit={this.handleSubmit} />;
    };
  };


  const mapStateToProps = state => {
    return { 
        response: state.login,
        }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ login }, dispatch);
  }
  export default connect (mapStateToProps, mapDispatchToProps) (Login);