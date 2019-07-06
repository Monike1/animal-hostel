var express = require('express');
var router = express.Router();
var bcrypt = require("bcrypt");
var User = require("../models/user");
var Offer = require("../models/offer");
var multer  = require('multer');
var path = require("path");


var upload = multer({ dest: './public/uploads/' });
// var upload = multer({ dest: path.join(__dirname, '../public/images/') })
router.post("/update", upload.single('profilePhoto'), (req, res)=> {

  User.findOneAndUpdate({_id: req.session.user._id}, {...req.body}, {new: true})
    .then((updatedUser)=> {
      req.session.user = updatedUser;
     
      res.status(200).json({message: "User updated"});
    })
    .catch((err)=> {
      
      res.status(500).json({err: err});
    })
})

router.post("/update-profile-photo", upload.single('profilePhoto'), (req, res)=> {
  
  User.findOneAndUpdate({_id: req.session.user._id}, {profilePhoto: req.file.filename}, {new: true},)
    .then((updatedUser)=> {
      req.session.user = updatedUser;
      
      res.status(200).json({message: "User photo updated"})
    })
    .catch((err)=> {
      res.status(500).json({err: err})
    })
})

router.post("/get-user", (req, res)=> {
  
  if(req.session.user) {
    res.status(200).json(req.session.user)
  } else {
    res.status(403).json({message: "Not logged in"})
  }
})

// to logout
router.post("/logout", (req, res)=> {
  if(req.session.user) {
    req.session.destroy()
    res.status(200).json({message: "Logged out"})
  } else {
    res.status(403).json({message: "User not logged in"})
  }
})

// to post give home offer form
router.post('/give-home', (req, res, next) => {
  const title = req.body.title;
  const objective = req.body.objective;
  const description = req.body.description;
  const animalType = req.body.animalType;
  
  Offer.create({
    user: req.session.user._id,
    title,
    objective,
    description,
    animalType     
  })
  .then(response => {
    User.findByIdAndUpdate(req.session.user._id, { $push:{ offers: response._id }})
    .then(theResponse => {
      res.json(theResponse);
      this.props.history.push('/offers');
    })
    .catch(err => {
      res.json(err);
    })  
  })
  .catch((err) => {
    res.json({message: err});
  })
});


module.exports = router;
