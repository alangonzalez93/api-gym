var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;

  mongoose = require('mongoose'),
  License = require('./api/models/licenseModel'),
  bodyParser = require('body-parser');
  
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/licenseDB'); 


  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());


  var routes = require('./api/routes/licenseRoutes');
  routes(app);


  app.listen(port);

console.log('licenses RESTful API server started on: ' + port);