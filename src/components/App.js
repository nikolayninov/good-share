import React from 'react'
import { AuthProvider } from '../contexts/AuthContext';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Container, Form, Button, Navbar, FormControl, Image, Nav, NavDropdown } from 'react-bootstrap'

import Dashboard from './Dashboard'
import Signup from './Signup'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Db from './Db'
import Profile from './Profile'
import LeftPanel from './LeftPanel'
import Matching from './Matching'

function App() {
  return (
    <Container className=" justify-content-center" >
      <div className="w-100" style={{ maxWidth: '100%' }}>
        <Router>
          <AuthProvider>
            <Navbar bg="dark" variant="dark" expand="lg" className="align-top sticky-nav ">
              <Navbar.Brand >
                <Image src="https://image.prntscr.com/image/huNRaTfJSKe6086oEotHaw.png" width="50" height="50" className="d-inline-block align-top" rounded />
              </Navbar.Brand>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                <Button variant="outline-secondary">Search</Button>
              </Form>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className="navbar-element">
                    <Link to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="/market" className="navbar-element">
                    <Link to="/market">
                      Market
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <NavDropdown title={
                <Link to="/">
                  <Image src="https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg" width="50" height="50" className="d-inline-block " rounded />
                </Link>
              } className="caret">
                <NavDropdown.Item>
                  <Link to="/profile" >Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Your offers</NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to="/update-profile">Update Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">

                  <div className="w-100 text-center mt-2">
                    <Button variant="link" >Log Out</Button>
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
            </Navbar >

            <LeftPanel />
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/db" component={Db} />
              <Route path="/profile" component={Profile} />
              <Route path="/market" component={Matching} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
