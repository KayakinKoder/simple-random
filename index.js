var secureContainer = require('./lib/node_secure');


var randomFactory = require("./lib/simpleRandom");
module.exports = randomFactory.create(secureContainer);