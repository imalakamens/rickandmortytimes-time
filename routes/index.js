var express = require('express');
var router = express.Router();
const request = require('request')

const rootURL = 'https://rickandmortyapi.com/api/'

/* GET home page. */
router.get('/', function(req, res, next) {
  const episode = req.query.episode; // the '.episode' came from the name on form

  request(
    `${rootURL}/episode/${episode}`,
    function(err, response, body) {
      const epData = JSON.parse(body);
      console.log(epData);
      res.render('index', { epData });
    }
   );
});

module.exports = router;
