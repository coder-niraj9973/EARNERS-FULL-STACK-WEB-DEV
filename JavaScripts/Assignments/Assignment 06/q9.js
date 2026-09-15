//format user names using map()

const names = ["Rahul", "Priya", "Aman"]

const addUser = names.map(name => `"User: ", ${name}`)

console.log(addUser);