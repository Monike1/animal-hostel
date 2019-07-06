import React, { Component } from 'react';
import axios from 'axios';
import OfferCard from '../components/OfferCard';
import { Link } from 'react-router-dom';


class HomeOffers extends Component {
  constructor(){
    super();
    this.state = { listOfOffers: [] };
  }

  getAllOffers = () => {
   
    axios.get(`${process.env.REACT_APP_BACK_END_BASE_URL}/api/offers`)
    .then(response => {

      this.setState({
        listOfOffers: response.data
      })
    })
  }

  componentDidMount() {

    this.getAllOffers();
  }

  render() {
    return (
      <div className="bg-wrapper">
        <div className="container">
          <h1>See homes for pets</h1>
         
          <div>
            { this.state.listOfOffers.reverse().map( (props, index) => {
         
              return (
                <Link key={index.toString()} to={{
                  pathname: `/offers/offer-details/${props._id}`,
                  query: {
                    profilePhoto: props.user.profilePhoto,
                    username: props.user.username,
                    street: props.user.street,
                    city: props.user.city,
                    title: props.title,
                    description: props.description
                  }  
                }}>
                
                  <OfferCard {...props} /> 
                
                </Link>
              )})
            }
          </div>
        </div>
      </div>
    )
  }
}

export default HomeOffers;