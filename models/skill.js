var mySkills = [
    {skill: 'Programming', done: true},
    {skill: 'Data analytics', done: false},
    {skill: 'Data modeling', done: false},
    
];

module.exports = {
    allSkills , 
    oneSkill , 
    adding ,
    deleteSkill
}
function deleteSkill(id){
    mySkills.splice(id , 1)
}

function adding (skill){
    mySkills.push(skill)
}

function allSkills(){
    return mySkills
};

function oneSkill(id){
    return mySkills[id]
};