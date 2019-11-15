var mySkills = [
    {skill: 'Programming', done: true},
    {skill: 'Data analytics', done: false},
    {skill: 'Data modeling', done: false}
];

module.exports = {
    allSkills , 
    oneSkill
}

function allSkills(){
    return mySkills
};

function oneSkill(id){
    return mySkills[id]
};