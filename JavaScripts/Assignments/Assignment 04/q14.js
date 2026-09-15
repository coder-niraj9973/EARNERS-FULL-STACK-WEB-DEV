//find an object using find()

let users = [
    {name : "Rahul", age: 20},

    {name: "Priya", age: 22}
]

let user = users.find(user => user.name === "Rahul")

console.log(user);
