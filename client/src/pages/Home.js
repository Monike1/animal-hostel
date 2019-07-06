import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';



class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <div className="header-background">
          <div className="main-header">
            <h1 className="main-heading">Animal Hostel</h1>
            <h2>Community</h2>
            <h3>Find temporary home for your pet <br /><span>or give home to somebody's pet</span></h3>
            <form className="flex-seach-box">
            <Link to="#how-it-works" className="button is-dark is-large is-rounded margin-top uppercase">Learn more</Link>
            </form>
          </div>
        </div>
        
        
        <div>
          <div className="container">
          <div id="how-it-works">
            <h2 className="font-large">How it works?</h2>
              <div>
                <p>
                Animal Hostel is a community of people who take care of animals.
                You can take care of somebody's pet at your home - give home, or
                leave your pet in a community member's house - find home. 
                After a few days a pet comes back to the owner.
                This is about giving care and taking temporary care of pets. 
                </p>
                <p>
                  On your profile page you will see two options - give home and find home.
                  Click give home if you want to take care of somebody's pet. Fill in the 
                  "Give Home" form to create an offer.
                  Click "Find Home" if you want to find home for your pet.
                </p>
              </div>
              <div>
                <h3>Is this the right place for you?</h3>
                <p>
                Do you have a pet? Do you need to leave your pet under a good care 
                while you travel or go on vacation? Or maybe you just like taking care of animals and want to take 
                care of somebody's pet in your house? Then this is the right place for you!
                </p>
              </div>
              <div>
                <h3>Do you need to have a pet?</h3>
                <p>
                You don't need to have an animal to be the part of Animal Hostel community. 
                If you would like to offer care and home to somebody else's pet, you are 
                very welcome to do so, even if you don't have your own pet. 
                Signup to become the part of Animal Hostel community. Pets need you!
                </p> 
              </div>
              <div>
                <h3>How to join the community?</h3>
                <p>
                  Create an account at Animal Hostel by clicking the "signup" button
                  in the top right corner of this website. Once you've signed, login to see your profile page. 
                  Now you're ready to find home for your pet 
                  or give home to somebody else's pet. These two options are available
                  on your profile page.
                </p>
              </div>
              <div>
                <h3>Tell your friends about Animal Hostel</h3>
                <p>
                  Animal Hostel is a community. The more members it has the more homes
                  for pets and the bigger chance that your own pet will find 
                  temporary home at the moment you most need it. Tell your friends about Animal Hostel and share the idea 
                  of taking care for pets. 
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Home;
