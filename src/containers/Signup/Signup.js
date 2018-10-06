import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpForm from '../../components/SignupForm/SignupForm';
import { signUp } from '../../actions';
import { userModel } from '../../models/user';
import { Link, Redirect } from 'react-router-dom';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
          model: userModel,
          isSignUp: true,
          redirect: false,
        };
    }

    componentWillReceiveProps(nextProps){
      if (nextProps.response.signUpSuccess == true ) {
        this.setState({redirect: true});
        return;
      }

      this.setState({ isSignUp: !this.state.isSignUp });
      return;
    }

    handleSubmit = async () =>  {
        await this.props.signUp(this.state.model);
    };
   
    render() {
      const { redirect } = this.state;
      if (redirect){
        return <Redirect to='/login'/>;
      }
      return <SignUpForm isSignUp={this.state.isSignUp} model={this.state.model}  handleSubmit={this.handleSubmit} />;
    };
  };


  const mapStateToProps = state => {
    return { 
        response: state.signUp, 
        }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ signUp }, dispatch);
  }
  export default connect (mapStateToProps, mapDispatchToProps) (SignUp);