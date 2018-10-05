import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './login';
import SignUp from './signup';
import Reports from './reports';
import Search from './search';
import Report from '../components/report';
import {logout} from '../actions';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: true,
      redirect: false,
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.response.isUserLogged == false ) {
      this.setState({logout: true, userLoggedEmail: false});
      return;
    }
  }

  setUserLoggedEmail = (userLoggedStatus) => {
    this.setState({userLoggedEmail: userLoggedStatus, logout: false});
  }

  logout = () => {
    this.props.logout();
  }

   loginPage = () => {
    return (
      <Login setUserLoggedEmail={this.setUserLoggedEmail} />
    );
  }

  render() {
    const { userLoggedEmail } = this.state;
    return(
      <Router> 
        <div>
        <Navbar fluid collapseOnSelect style={{zIndex: 2}}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React FE Test</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
            {userLoggedEmail &&
             <LinkContainer to="/reports">
               <NavItem eventKey={1} href="#">Reports</NavItem>
             </LinkContainer>
             }
             {userLoggedEmail &&
             <LinkContainer to="/search">
               <NavItem eventKey={2} href="#">New Search</NavItem>
             </LinkContainer>
             }
             </Nav>
            <Nav pullRight>
              {userLoggedEmail &&
              <LinkContainer to="/login">
                <NavItem eventKey={1} href="#" onClick={this.logout}> Logout</NavItem>
              </LinkContainer>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Switch>
            <Route path="/login" render={this.loginPage}/>
            <Route path="/sign-up" component={SignUp}/>
            <Route path="/reports" component={Reports}/>
            <Route path="/search" component = {Search}/>
            <Route path="/report" component ={Report}/>
            <Redirect from='*' to='/login'/>
          </Switch>
        </div>
        </div>
    </Router>
  )}
}

const mapStateToProps = state => {
  return {
      response: state.userLogout,
      }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logout }, dispatch);
}
export default connect (mapStateToProps, mapDispatchToProps) (Header);