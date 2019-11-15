var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controller/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
/* GET /todos/5 for example */
router.get('/:id', skillsCtrl.show);

module.exports = router;

