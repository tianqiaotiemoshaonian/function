var compose = require('./compose.js').compose
var compose2 = require('./compose.js').compose2
var head = function(x){ return x[0]}
var toUpperCase = function(x){ return x.toUpperCase()}
var exclaim = function(x){ return x + '!';};
var shout = compose(exclaim, toUpperCase);

var reverse = function(x){ 
    var tmp = []
    for(var i = x.length - 1; i >= 0; i--){
        tmp.push(x[i])
    }
    return tmp
}

var last = compose(head, reverse)

console.log(last(['jumpkick', 'roundhouse', 'uppercut']))
var lastUpper = compose2(toUpperCase, head, reverse);

console.log(lastUpper(['jumpkick', 'roundhouse', 'uppercut']))