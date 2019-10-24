const express = require('express');
const router = express.Router();
const AuthorModel = require('../model/Person');
const BooksModel = require('../model/Story');
const EditionModel = require('../model/Edition');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = router;


// ,{new:true}
//, populate:[{path:'author'}]
//, populate:{path:'author'}