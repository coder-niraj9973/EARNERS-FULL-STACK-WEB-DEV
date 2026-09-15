//filter users by role

const users = [
    { name: "Rahul", role: "developer" },
    { name: "Priya", role: "student" }
]

const developer = users.filter(user => user.role === "developer")

console.log(developer);