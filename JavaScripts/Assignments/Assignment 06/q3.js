//extract user names

const array = [
    { name: "Rahul", email: "rahul@example.com" },
    { name: "Priya", email: "priya@example.com" }
]

const onlyNames = array.map(user => user.name)

console.log(onlyNames);
