let Skill = require('../models/skill')

module.exports = {
    index,
    show
  };
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.allSkills()
    });
  }
  
  function show(req, res) {
    console.log(req.params.id);
    res.render('skills/show', {
      skill: Skill.oneSkill(req.params.id),
      skillNum: parseInt(req.params.id) + 1
    });
  }






