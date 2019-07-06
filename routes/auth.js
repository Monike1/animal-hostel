const express = require('express');
const router = express.Router();
const User = require('../models/user');

// to encrypt passwords
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

// to post signup form
router.post('/signup', (req, res, next) => {
 
  const username = req.body.username;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const city = req.body.city;
  const street = req.body.street;
  const houseNumber = req.body.houseNumber;
  const zipcode = req.body.zipcode;
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  
  User.findOne({ "username": username })
  .then(user => {
    
    if (user !== null) {
      res.status(403).json({message: "Username already taken"});
    } else if (username === "" || firstName === "" || lastName === "" || email === "" || city === "" || street === "" || houseNumber==="" || zipcode === "" || password === "") {
      res.status(403).json({message: "Please fill in all the fields"});
    } else {
      
      User.create({
        username,
        firstName,
        lastName,
        email,
        city,
        street,
        houseNumber,
        zipcode,
        description: "",
        password: hashPass,
        messages: [],
        offers: [],
        animals: []
      })
      .then((user) => {

        req.session.user = user; 
        
        res.status(200).json({message: "Signed up"})
      })
      .catch((error)=> {
       
        res.status(500).json({message: error})
      })
    }
  })
  .catch(error => {
    next(error);
  });
});  

// to post login form
router.post('/login', (req, res, next) => {
  
  User.findOne({username: req.body.username})
    .then((user)=> {
      if(user) {
        bcrypt.compare(req.body.password, user.password, (err, match) => {
          if(err) res.status(500).json({message: err}) 
          else if(match) {
            delete user.password
            req.session.user = user
            res.status(200).json({message: "Logged in."})
          } else {
            res.status(403).json({message: "Invalid credentials."})
          }
        })
      } else {
        res.status(403).json({message: "Invalid credentials."})
      }
    })
    .catch((err)=> {
      res.status(500).json({message: err}) 
    })
});

module.exports = router;