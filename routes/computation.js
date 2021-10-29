var express = require('express');
var router = express.Router();
var value = Math.round(Math.random()*100);

var x=Math.log2(value); 
var y=Math.cosh(value) 
var z=Math.floor(value) 


/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(`[Math.pow] applied to [${value}] is [${x}]<br>
  [Math.sign] applied to [${value}] is [${y}]<br>
  [Math.tanh] applied to [${value}] is [${z}]<br>`); 
});

module.exports = router;