var express = require('express');
var router = express.Router();
const request = require('request')

const rootURL = 'https://rickandmortyapi.com/api/'

/* GET home page. */
router.get('/', function(req, res, next) {
  const episodeId = req.query.episode; // the '.episode' came from the name on form


  request(
    `${rootURL}/episode/${episodeId}`,
    function(err, response, body) {
      const epData = JSON.parse(body);
      request(
        `${rootURL}/character/${charId}`,
        function(err, response, body) {
          epData.chars = JSON.parse(body);
          console.log(epData.chars);

          res.render('index', { epData });
        }
      );
    }
   );
});

module.exports = router;
