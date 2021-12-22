import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Loginpage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactsPage from './pages/ContactsPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Notfoundpage from './pages/404/Notfoundpage.jsx';

function AppRoutingFinal() {
  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  return (
    <Router>
      {/* Route Switch */}
      <Switch>
        {/* Redirections to protect our routes */}
        <Route exact path="/">
          {loggedIn ? (
            <Redirect from="/" to="/dashboard" />
          ) : (
            <Redirect from="/" to="/login" />
          )}
        </Route>
        {/* Login Route */}
        <Route exact path="/login" component={Loginpage} />
        {/* DashBoard Route */}
        <Route exact path="/dashboard">
          {loggedIn ? <ContactsPage /> : <Redirect from="/" to="/login" />}
        </Route>
        <Route exact path="/register" component={RegisterPage}></Route>
        <Route component={Notfoundpage} />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
