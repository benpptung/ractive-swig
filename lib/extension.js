var Ractive = require('ractive');

module.exports = function(tmpl, data){

  var options = {template: tmpl, data: data};

  if (data.partials) options.partials = data.partials;
  if (data.components) options.components = data.components;

  return (new Ractive(options)).toHTML();
};