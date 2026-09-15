//find an index using findIndix()

let users = [
    {name : "Rahul", age: 20},

    {name: "Priya", age: 22}
]

let user = users.findIndex(users => users.name === "Priya")

console.log(user);