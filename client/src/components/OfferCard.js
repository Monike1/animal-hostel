import React, { Component } from 'react';
import moment from 'moment';


class OfferCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: "",
      city: "",
      street: "",
      zipcode: "",
      title: "",
      description: "",
      err: null
    }
  }


  render() {
    return (
     
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={`${process.env.REACT_APP_BACK_END_BASE_URL}/uploads/${this.props.user.profilePhoto}`} alt="User img" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{this.props.title}</p>
              <p className="subtitle is-6">{this.props.user.street},<span> {this.props.user.city}</span></p>
            </div>
          </div>
          <div className="content">
            {this.props.description}
            <br />
            <time>{moment(this.props.createdAt).format('LT - Do MMM YYYY')}</time>
          </div>
        </div>
      </div> 
    )
  }
}

export default OfferCard;