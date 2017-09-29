var compose = require('./compose.js');
var toUpperCase = function(x){ return x.toUpperCase();};
var exclaim = function(x){ return x + '!';};
var shout = compose(exclaim, toUpperCase);

console.log(shout('send in the clowns'))