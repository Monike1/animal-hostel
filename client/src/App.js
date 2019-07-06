import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import GoogleFontLoader from 'react-google-font-loader';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import UpdatePhoto from "./pages/UpdatePhoto";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import axios from 'axios';
import HomeOffers from './pages/HomeOffers';
import OfferDetails from './pages/OfferDetails';


class App extends Component {
  constructor(props){
    super(props)
    this.fetchUser = this.fetchUser.bind(this)
    this.logout = this.logout.bind(this)
  }
  state = {
    user: {},
    err: null
  }

  componentDidMount() {
      this.fetchUser()
  }

  fetchUser = ()=> {
   
    axios({
      url: `${process.env.REACT_APP_BACK_END_BASE_URL}/users/get-user`,
      method: "post",
      withCredentials: true
    })
    .then((response)=> {
   
      this.setState({
        user: response.data
      },()=> {
          
        
        this.props.history.push("/") 
      })
    })
    .catch(err=> {
      this.setState({
        err: err
      })
    })
  }

  logout() {
    axios({
      method: "post",
      withCredentials: true,
      url: `${process.env.REACT_APP_BACK_END_BASE_URL}/users/logout`
    })
    .then((response)=> {
      this.setState({
        user: {}
      },()=> {
        this.props.history.push("/")
      })
    })
    .catch((err)=> {
      this.setState({
        err
      })
    })
  }

  render () {
    return (
      <div className="App">
        <GoogleFontLoader
          fonts={[
            {
              font: 'Pacifico',
              weights: [400, '400i'],
            },
            {
              font: 'Roboto Mono',
              weights: [400, 700],
            },
          ]}
          subsets={['cyrillic-ext', 'greek']}
        />


        <Container>
          <Navbar user={this.state.user} logout={this.logout} />
        </Container>
        <Switch>
          <Route exact path="/" render={(props)=> <Home fetchUser={this.fetchUser} {...props}/> } />
          <Route exact path="/login" render={(props)=> <Login {...props} fetchUser={this.fetchUser} />} />
          <Route exact path="/signup" render={ (props) => <Signup {...props} fetchUser={this.fetchUser} /> } />
          <Route exact path="/logout" render={(props)=> <Home logout={this.logout} {...props}/> } />
          <Route path="/profile" render={(props)=><Profile {...props} fetchUser={this.fetchUser} user={this.state.user}/>} />
          <Route path="/update" render={(props)=><UpdateProfile {...props} fetchUser={this.fetchUser} user={this.state.user}/>} />
          <Route path="/update-profile-photo" render={(props)=><UpdatePhoto {...props} fetchUser={this.fetchUser} user={this.state.user}/>} />
          <Route path="/offers/offer-details/:id" component={OfferDetails} />
          <Route path="/offers" render={(props)=><HomeOffers {...props} fetchUser={this.fetchUser} user={this.state.user}/>} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
