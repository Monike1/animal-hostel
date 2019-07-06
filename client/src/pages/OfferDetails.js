import React from 'react';
import placeholderPhoto from "../images/blank-profile.png";

function OfferDetails(props) {
debugger
  return (
    
    <div className="bg-wrapper">
      <div className="user-profile container">
          <div className="user-details">
              
            <div className="profile-img-container">
            {!props.location.query.profilePhoto && <><img id="profile-photo" src={placeholderPhoto} alt=""/> </>}
            {props.location.query.profilePhoto && <><img id="profile-photo" src={`${process.env.REACT_APP_BACK_END_BASE_URL}/uploads/${props.location.query.profilePhoto}`} alt=""/></> }
            </div>
            <h1>{props.location.query.username}</h1>
            <p>{props.location.query.street}, {props.location.query.city}</p>
              
          </div>
          <div className="user-profile-content">
            <h1>{props.location.query.title}</h1>
            <p>{props.location.query.description}</p>
          </div>
          
      </div>
    </div>
  )
}

export default OfferDetails;
