import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import placeholderPhoto from "../images/blank-profile.png";
import { FaPen } from 'react-icons/fa';
import CoolButton from '../components/CoolButton';
import GiveHomeForm from './GiveHomeForm';

class Profile extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            username: props.user.username,
            firstName: props.user.firstName,
            lastName: props.user.lastName,
            city: props.user.city,
            profilePhoto: props.user.profilePhoto
        }
        // this.formRef = React.createRef(); // new
        // this.handleChange = this.handleChange.bind(this);
        // this.submit = this.submit.bind(this);

    }

    toggleModal() {
        
        let modal = document.getElementById('modal');
        modal.classList.toggle('is-active');
    }

    render() {
        return (
            <div className="bg-wrapper">
                <div className="user-profile container">
                    <div className="user-details">
                        
                        <div className="profile-img-container">
                        {!this.state.profilePhoto && <><img id="profile-photo" src={placeholderPhoto} alt=""/><Link to="/update-profile-photo"><FaPen className="photo-edit-icon"/></Link> </>}
                        {this.state.profilePhoto && <><img id="profile-photo" src={`${process.env.REACT_APP_BACK_END_BASE_URL}/uploads/${this.state.profilePhoto}`} alt=""/><Link to="/update-profile-photo"><FaPen className="photo-edit-icon"/></Link></> }
                        </div>

                        <h2>My Profile <Link to="/update"><FaPen /></Link></h2>
                        <p>{this.state.firstName}</p>
                        <p>{this.state.lastName}</p>
                        <p>{this.state.city}</p>
                    </div>
                    <div className="user-profile-content">
                        <h1>Welcome {this.state.username}</h1>
                        <div class="offer-card-container">
                            <div className="offer-card flex-order">
                                <h2>Give temporary home to a pet</h2>
                                <CoolButton id="modal-button" className="button is-success modal-button" data-target="modal" aria-haspopup="true" handleClick={this.toggleModal}>Start</CoolButton>
                            </div>
                            <p className="offer-card-text-margin-l">Contribute to Animal Hostel Community and help others to find temporary home for their pets</p>
                        </div>
                        <div class="offer-card-container">
                            <p className="offer-card-text-margin-r">Leave your pet in a friendly atmosphere, while you're out of home for a few days</p>
                            <div className="offer-card">
                                <h2>Find temporary home for your pet</h2>
                                <Link to="/offers" className="button is-success">Start</Link>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div id="modal" className="modal">
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            
                            <GiveHomeForm {...this.props} />
                        </div>
                        <button className="modal-close is-large" aria-label="close" onClick={this.toggleModal}></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
