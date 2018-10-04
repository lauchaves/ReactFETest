import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Login from './login';
import SignUp from './signup';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        searchCarTxt: '', 
    };
  }

  onInputChange = searchCarTxt => {
    this.setState({ searchCarTxt });
    this.carSearch(searchCarTxt);
  };

  carSearch = searchCarTxt => {
    const carList = this.props.cars.filter((car) => car.brand.toLowerCase().includes(searchCarTxt.toLowerCase()));
    this.setState({ cars: carList });
  };

  render() {
    return(
      <Router> 
        <div>
        <Navbar fluid inverse collapseOnSelect style={{zIndex: 2}}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
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
            <Redirect from='*' to='/login'/>
          </Switch>
        </div>
        </div>
    </Router>
  )}
}

export default Header;


