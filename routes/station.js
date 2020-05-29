'use strict';

const express = require('express');
const Station = require('./../models/station');

const stationRouter = new express.Router();

stationRouter.get('/create', (req, res) => {
  console.log('get request', req.body);
  res.render('station/create');
});

stationRouter.post('/create', (req, res, next) => {
  console.log('get request', req.body, req.user_id);
  const creator = req.user._id;
  const { name, address, stepFree, liftAvailable, gap, staffAvailable, comments } = req.body;
  Station.create({
    name,
    address,
    stepFree,
    liftAvailable,
    gap,
    staffAvailable,
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
    .then(station => {
      res.render('station/single', { station });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = stationRouter;
