//rest parameters

showSkills("Rahul", "HTML", "CSS", "JavaScript");

function showSkills(name, ...skills ){
    console.log(`Name: ${name}`);
    console.log(`Skills: ${skills}`);

}