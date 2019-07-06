import React, { Component } from 'react';
import axios from "axios";
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';
import qs from "qs";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      err: null
    }
  }


  handleChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = (e)=> {        
    e.preventDefault()
    axios({
      url: `${process.env.REACT_APP_BACK_END_BASE_URL}/auth/login`,
      data: qs.stringify(this.state),
      method: "POST",
      withCredentials: true,
      headers: {
        'content-type': "application/x-www-form-urlencoded"
      }
    })
    .then((response)=> {
      this.props.fetchUser()
    })
    .catch((err)=> {
      this.setState({
        err:err.message
      })
    })
  }

  render() {
    return (
      <div className="bg-wrapper content-height">
        <div className="columns is-centered">
          <form onSubmit={this.handleFormSubmit} className="signup-form column is-one-third">
            <h2>Login</h2>
            <FormField label="Username" type="text" placeholder="Your username" name="username" handleChange={this.handleChange} />
            <FormField label="Password" type="password" name="password" handleChange={this.handleChange} />
            {this.state.err ? <p class="error-message">{this.state.err}</p>:""}
            <CoolButton className="button is-success">Login</CoolButton>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;