var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controller/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
/* GET /todos/5 for example */
router.get('/add' , skillsCtrl.add);
router.get('/:id', skillsCtrl.show);
router.delete('/:id' , skillsCtrl.delete)
router.post('/' , skillsCtrl.addOne)
module.exports = router;

