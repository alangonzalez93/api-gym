'use strict';
module.exports = function(app) {
  var licenses = require('../controllers/licenseController');

  // licenses routes
  app.route('/licenses')
    .get(licenses.list_all_licenses)
    .post(licenses.create_license);

   app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

};