var compose = function(f,g) {
    return function(x) {
      return f(g(x));
    };
  };

var compose2 = function(f, g, h){
  return function(x){
    return f(g(h(x)))
  }
}
module.exports = {compose: compose,
   compose2: compose2};