var express = require('express');
var router = express.Router();
var Twit = require('twit');

var client = new Twit({
  consumer_key:         'E6LAS47fy3jQfcRBpdooWaLRa',
  consumer_secret:      '1JrhjIQMSoX501mlHPFcSdaBwCldeN66H3Z5Qfodql9ejhvNKe',
  access_token:         '304569962-MCSJQEgGzkbxCV7kNAJ8zBV9tQ0G4xdjnzSGrGz8',
  access_token_secret:  'ig1hsYTgyYbar8vlnTigQKZfYr4WwnByaUFvXM021ClsX'
})

module.exports = client;
