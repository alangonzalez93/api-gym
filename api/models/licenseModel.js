'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LicenseSchema = new Schema({
  key: {
    type: String,
    Required: 'Enter the key of the license'
  },
  creation_date: {
    type: Date,
    default: Date.now
  },
  device_id: {
    type: String,
    Required: 'Enter the device id of the license'
  }
});

module.exports = mongoose.model('License', LicenseSchema);