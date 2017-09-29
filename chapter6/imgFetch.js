var curry = require('lodash').curry
var compose = require('lodash').flowRight
var mapt = require('lodash').map
var map = curry(mapt)

var data = {media: {m: "real data"}}
var is= {items: [data, data, data]}

var prop = curry((property, object) => object[property])

var mediaUrl = compose(prop('m'), prop('media'))

var srcs = compose(map(mediaUrl), prop("items"))
//console.log(mediaUrl(data))
console.log(srcs(is))