//update object data immutably

const users = [
    { name: "Rahul", role: "student" },
    { name: "Priya", role: "student" }
]

const roleChanged = users.map(user => ({
    ...user,
    role: "developer"
}));

console.log(roleChanged);