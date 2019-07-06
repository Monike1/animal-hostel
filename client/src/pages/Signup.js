import React, { Component } from 'react';
import axios from "axios";
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email:  "",
      city: "",
      street: "",
      houseNumber: "",
      zipcode: "",
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
      url: `${process.env.REACT_APP_BACK_END_BASE_URL}/auth/signup`,
      data: {
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email:  this.state.email,
        city: this.state.city,
        street: this.state.street,
        houseNumber: this.state.houseNumber,
        zipcode: this.state.zipcode,
        password: this.state.password
      },
      method: "post",
      withCredentials: true
    })
    .then((response)=> {
     
      this.props.fetchUser();
      console.log(response);
    })
    .catch((err)=> {
    
      this.setState({
          err:err.message
      })
    })
  }

  render() {
    return (
      <div className="bg-wrapper">
        <div className="columns is-centered">
          <form onSubmit={this.handleFormSubmit} className="signup-form column is-one-third">
            <h2>Signup</h2>
            <FormField label="Username" type="text" placeholder="Your username" name="username" handleChange={this.handleChange} />
            <FormField label="First name" type="text" placeholder="Your first name" name="firstName" handleChange={this.handleChange} />
            <FormField label="Last name" type="text" placeholder="Your last name" name="lastName" handleChange={this.handleChange} />
            <FormField label="City" type="text" placeholder="City" name="city" handleChange={this.handleChange} />
            <FormField label="ZIP code" type="text" placeholder="ZIP code" name="zipcode" handleChange={this.handleChange} />
            <FormField label="Street" type="text" placeholder="Street" name="street" handleChange={this.handleChange} />
            <FormField label="House number" type="text" placeholder="House number" name="houseNumber" handleChange={this.handleChange} />
            <FormField label="Email" type="email" name="email" placeholder="e.g. example@gmail.com" handleChange={this.handleChange} />
            <FormField label="Password" type="password" name="password" handleChange={this.handleChange} />
            {this.state.err ? <p class="error-message">{this.state.err}</p>:""}
            <CoolButton className="button is-success">Signup</CoolButton>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup;