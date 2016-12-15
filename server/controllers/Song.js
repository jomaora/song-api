'use strict';

var url = require('url');


var Song = require('./SongService');


module.exports.addSong = function addSong (req, res, next) {
  Song.addSong(req.swagger.params, res, next);
};

module.exports.deleteSong = function deleteSong (req, res, next) {
  Song.deleteSong(req.swagger.params, res, next);
};

module.exports.getSongById = function getSongById (req, res, next) {
  Song.getSongById(req.swagger.params, res, next);
};
