'use strict';

const express = require('express');
//const Station = require('./../models/station');

const stationRouter = new express.Router();

stationRouter.get('/create', (req) => {
  console.log('get request', req.body);
});

/* stationRouter.get('/create', (req, res, next) => {
  console.log(req.body);
  res.render('station/create');
}); */


/* stationRouter.get('/list', (req, res, next) => {
  Station.find()
    .then(stations => {
      //console.log(stations)
      res.render('station/list', { stations });
    })
    .catch(error => {
      next(error);
    });
});


stationRouter.get('/:stationId', (req, res, next) => {
  const stationId = req.params.stationId
  Station.findById(stationId)
    .then(station => {
      res.render('station/single', { station });
    })
    .catch(error => {
      next(error);
    });
});
 */





module.exports = stationRouter;