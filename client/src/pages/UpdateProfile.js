import React, { Component } from 'react';
import axios from "axios";
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';


class UpdateProfile extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            username: props.user.username,
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            email: props.user.email, 
            city: props.user.city,
            street: props.user.street,
            houseNumber: props.user.houseNumber,
            zipcode: props.user.zipcode
        }
        this.formRef = React.createRef(); // new
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
        
    }
    handleChange(e){
      
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit = (e) => {
    
        e.preventDefault()
        let form = this.formRef.current // document.getElementById("theForm")
        let formData = new FormData(form) // new
        
        axios({
            url: `${process.env.REACT_APP_BACK_END_BASE_URL}/users/update`,
            data: formData,
            method: "post",
            headers: {'Content-Type': 'multipart/form-data' }, //new
            withCredentials: true
        })
        .then(()=> {
       
            this.props.fetchUser()
        })

        .catch((err)=> {
            console.log(err);
        })
    }
    render() {
    
        return (

            <div className="bg-wrapper">
                <div className="columns is-centered">
                    <form ref={this.formRef} onSubmit={this.submit} className="signup-form column is-one-third">
                        <h1>Edit Profile</h1>
                        <FormField label="Username" type="text" name="username" handleChange={this.handleChange} value={this.state.username}/>
                        <FormField label="First name" type="text" name="firstName" handleChange={this.handleChange} value={this.state.firstName}/>
                        <FormField label="Last name" type="text" name="lastName" handleChange={this.handleChange} value={this.state.lastName}/>
                        <FormField label="City" type="text" name="city" handleChange={this.handleChange} value={this.state.city}/>
                        <FormField label="ZIP code" type="text" name="zipcode" handleChange={this.handleChange} value={this.state.zipcode}/>
                        <FormField label="Street" type="text" name="street" handleChange={this.handleChange} value={this.state.street}/>
                        <FormField label="House number" type="text" name="houseNumber" handleChange={this.handleChange} value={this.state.houseNumber}/>
                        <FormField label="Email" type="email" name="email" handleChange={this.handleChange} value={this.state.email}/>
                        
                        {this.state.err ? <p className="error-message">{this.state.err}</p>:""}
                        <CoolButton className="button is-success">Save</CoolButton>
                    </form>
                   
                </div>
            </div>
        )
    }
}

export default UpdateProfile;
