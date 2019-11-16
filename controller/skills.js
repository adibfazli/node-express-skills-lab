let Skill = require('../models/skill')

module.exports = {
    index,
    show , 
    add , 
    addOne ,
    delete : deleteOne
  };
  
  function deleteOne(req , res){
    Skill.deleteSkill(req.params.id);
    res.redirect('/skills')
  }

  
  function add(req , res){
    res.render('skills/add')
  }
  function addOne(req , res){
    Skill.adding(req.body)
    res.redirect('/skills')
    console.log(req.body)
  }
  
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






