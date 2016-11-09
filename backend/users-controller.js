/**
 * Created by heloisa.r.carbone on 11/7/2016.
 */
var fs = require('fs');

module.exports.get = function (req, res) {
    var event = fs.readFileSync('frontend/data/users.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(event);
};

