'use strict';

const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    stepFree: {
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
