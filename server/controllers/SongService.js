'use strict';

exports.addSong = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Song)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteSong = function(args, res, next) {
  /**
   * parameters expected in the args:
  * songId (Long)
  * api_key (String)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getSongById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * songId (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "id" : 42,
  "title" : "Fix you",
  "artist" : "Coldplay",
  "album" : "X&Y",
  "year" : 2005
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

