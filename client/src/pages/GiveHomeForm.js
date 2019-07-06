import React, { Component } from 'react';
import axios from "axios";
import FormField from '../components/FormField';
import CoolButton from '../components/CoolButton';


class GiveHomeForm extends Component {
  constructor(props) {
  
    super(props);
    this.state = {
      title: "",
      objective: "Give Home",
      description: "",
      animalType: "hamster",
      err: null
    }
  }

  toggleModal() {
    debugger
    let modal = document.getElementById('modal');
    modal.classList.toggle('is-active');
  }


  handleChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleFormSubmit = (e)=> {
    debugger
    e.preventDefault()
    
    axios({
      url: `${process.env.REACT_APP_BACK_END_BASE_URL}/users/give-home`,
      data: {
        objective: this.state.objective,
        title: this.state.title,
        description: this.state.description,
        animalType: this.state.animalType
      },
      method: "post",
      withCredentials: true
    })
    .then((response)=> {
      this.props.history.push("/offers") 
    })
    .catch((err)=> {
     
      this.setState({
          err:err.message
      })
    })
  }

  render() {
   
    return (
      
      <form onSubmit={this.handleFormSubmit} className="signup-form">
        <h2>Give Home</h2>

        <FormField label="Title" type="text" value={this.state.title} 
          placeholder="Title of your offer" name="title" handleChange={this.handleChange} />
        <FormField label="Description" type="text"
          value={this.state.description} 
          placeholder="Offer content" 
          name="description" handleChange={this.handleChange} />
        <div className="field">
          <label className="label" htmlFor="pet-select">Choose a pet:</label>
          <div className="control">
          <div className="select">
            <select id="pet-select" onChange={this.handleChange} value={this.state.animalType} name="animalType" >
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="bird">Bird</option>
              <option value="fish">Fish</option>
              <option value="anyAnimal">Any animal</option>
            </select>
          </div>
        </div>
        
        </div>
        
        {this.state.err ? <p className="error-message">{this.state.err}</p>:""}
        <CoolButton type="submit" className="button is-success">Submit</CoolButton>
      </form>
          
    )
  }
}

export default GiveHomeForm;