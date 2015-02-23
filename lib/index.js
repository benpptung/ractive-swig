var extension = exports.extension = require('./extension');
var ractfile = exports.ractag = require('./tag-ractfile');

var ext_set = false;

exports.setTagRactFile = function(swig){

  if (!ext_set) {
    swig.setExtension('ractive', extension);
    ext_set = true;
  }
  swig.setTag('ractfile', ractfile.parse, ractfile.compile);
};