'use strict';

const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema(
  {
    transportType: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    steps: {
      type: String
    },
    liftAvailable: {
      type: String
    },
    gap: {
      type: String
    },
    staffAvailable: {
      type: String
    },
    motionAccessibility: {
      type: String
    },
    signage: {
      type: String
    },
    visual: {
      type: String
    },
    hearing: {
      type: String
    },
    language: {
      type: String
    },
    cognitive: {
      type: String
    },
    wiFi: {
      type: String
    },
    comments: {
      type: String
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  {
    timestamps: {
      createdAt: 'createdDate',
      updatedAt: 'updatedDate'
    }
  }
);

const Station = mongoose.model('Station', stationSchema);

module.exports = Station;
