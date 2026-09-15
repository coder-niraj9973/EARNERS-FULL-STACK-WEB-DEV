//create a comma separated string

const frontend = ["HTML", "CSS", "JavaScript"]

const comma = frontend.reduce((str, tech) => str + tech + ", ", "")

console.log(comma);
