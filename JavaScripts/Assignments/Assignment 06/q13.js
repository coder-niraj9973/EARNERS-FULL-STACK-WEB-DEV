//filter active users

const users = [
    { name: "Rahul", isActive: true },
    { name: "Priya", isActive: false }
]

const isActive = users.filter(user => user.isActive)

console.log(isActive);