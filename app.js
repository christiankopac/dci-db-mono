var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParse =  require('body-parser');

var routes = require('./routes/index');
var users = require('./');

// mongodb://<dbuser>:<dbpassword>@ds263640.mlab.com:63640/dci-db-mongo
