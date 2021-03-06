'use strict';

const express = require('express');
const routeGuard = require('./../middleware/route-guard');
const Station = require('./../models/station');

const stationRouter = new express.Router();

stationRouter.get('/create', routeGuard, (req, res) => {
  console.log('get request', req.body);
  res.render('station/create');
});

stationRouter.post('/create', routeGuard, (req, res, next) => {
  console.log('get request', req.body, req.user_id);
  const creator = req.user._id;
  const {
    transportType,
    name,
    address,
    steps,
    liftAvailable,
    gap,
    staffAvailable,
    motionAccessibility,
    signage,
    visual,
    hearing,
    language,
    cognitive,
    wiFi,
    comments
  } = req.body;
  Station.create({
    transportType,
    name,
    address,
    steps,
    liftAvailable,
    gap,
    staffAvailable,
    motionAccessibility,
    signage,
    visual,
    hearing,
    language,
    cognitive,
    wiFi,
    comments,
    creator
  })
    .then(station => {
      console.log(station);
      const stationId = station._id;
      res.redirect(`/station/${stationId}`);
    })
    .catch(error => {
      next(error);
    });
});

stationRouter.get('/list', (req, res, next) => {
  Station.find()
    .populate('station creator')
    .then(stations => {
      //console.log(stations)
      res.render('station/list', { stations });
    })
    .catch(error => {
      next(error);
    });
});

stationRouter.get('/:stationId', (req, res, next) => {
  const stationId = req.params.stationId;
  Station.findById(stationId)
    .populate('station creator')
    .then(station => {
      res.render('station/single', { station });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = stationRouter;
