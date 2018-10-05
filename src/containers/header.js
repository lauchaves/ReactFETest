import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Login from './login';
import SignUp from './signup';
import Reports from './reports';
import Search from './search';
import Report from '../components/report';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
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
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Switch>
            <Route path="/login" component={Login}/>
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

export default Header;


