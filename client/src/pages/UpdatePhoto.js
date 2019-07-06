import React, { Component } from 'react';
import axios from "axios";
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';

class UpdatePhoto extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            profilePhoto: ""
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
            url: `${process.env.REACT_APP_BACK_END_BASE_URL}/users/update-profile-photo`,
            data: formData,
            method: "post",
            headers: {'Content-Type': 'multipart/form-data' }, //new
            withCredentials: true
        })
        .then(()=> {
            this.props.fetchUser();
        })
        .catch((err)=> {
            console.log(err);
        })
    }
    render() {
        
        return (
            
            <div className="bg-wrapper content-height">
                <div className="columns is-centered">
                    <form ref={this.formRef} onSubmit={this.submit} className="signup-form column is-one-third">
                        <h1>Edit Profile Photo</h1>
                        <FormField label="Profile image" type="file" name="profilePhoto" handleChange={this.handleChange} value={this.state.profilePhoto}/>
                        
                        {this.state.err ? <p className="error-message">{this.state.err}</p>:""}
                        <CoolButton className="button is-success">Save</CoolButton>
                    </form>
                
                </div>
            </div>
        )
    }
}

export default UpdatePhoto;
