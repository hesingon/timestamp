var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', name: 'Darius'});
});

router.get('/:time', function(req, res){

    var unixToNatural = function(time){
        var date = new Date(time * 1000)
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        var day = date.getDate(date)
        var month = months[date.getMonth(date)]
        var year = date.getFullYear(date)

        return month + ' ' + day + ', ' + year
    }

    if(!isNaN(req.params.time)){
        var result = { 'unix' : req.params.time, 'natural': unixToNatural(req.params.time)}
        res.json(result)
    } else {
        var natural = new Date(req.params.time)
        var result
        if(!isNaN(natural)){
            var unix = natural / 1000
            result = { 'unix': unix, 'natural': req.params.time}
        } else {
            result = { 'unix': null, 'natural': null}
        }
        res.json(result)
    }
    
})

module.exports = router;
