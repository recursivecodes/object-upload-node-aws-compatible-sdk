const express = require('express');
const router = express.Router();
const config = require('../config/config.js');
const ObjectService = require('../service/object-service');
const objectService = new ObjectService(config);

router.get('/', function(req, res, next) {
  res.send({
    endpoints: {
      'POST /upload': 'Upload a file',
    }
  });
});

router.post('/upload', function(req, res, next) {
  // expects a form field named 'testFile'
  const testFile = req.files.testFile;
  const mime = testFile.mimetype;
  const data = testFile.data;
  const name = testFile.name;

  console.log(`Uploading ${name}...`)
  objectService.upload(data, mime)
      .then( (data) => {
        console.log(data);
        res.send(data);
      })
      .catch( (err) => {
        console.error(err);
        res.send(err);
      });

});

module.exports = router;
