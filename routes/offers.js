const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Offer = require('../models/offer');

// GET route => to get all the offers
router.get('/offers', (req, res, next) => {
  
  Offer.find()
    .populate("user")
    .then(allTheOffers => {
     
      res.json(allTheOffers);
    })
    .catch(err => {
      
      res.json(err);
    })
});


module.exports = router;