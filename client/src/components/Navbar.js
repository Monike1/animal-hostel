import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = (props) => {
  
  return (
    <div className="nav-container">
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /><span className="logo-font">Animal Hostel</span></Link>
          </div>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
    
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                {typeof props.user !== "object" || Object.keys(props.user).length === 0? 
                <div className="field is-grouped">
                  <p className="control">
                    <Link to="/login" className="button is-info"><span>Login</span></Link>
                  </p>
                  <p className="control">
                    <Link to="/signup" className="button is-primary"><span>Signup</span></Link>
                  </p>
                </div> :
                <div className="field is-grouped">
                  <p className="control">
                  <Link to="/profile" className="button is-info" onClick={props.profile}><span>Profile</span></Link>
                  </p>
                  <p className="control">
                    <Link to="/logout" className="button is-primary" onClick={props.logout}>Logout</Link>
                  </p>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


// to open hamburger menu
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

export default Navbar;