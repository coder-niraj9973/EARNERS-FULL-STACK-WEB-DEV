//update an object using spread

const user = {
    name: "Rahul",
    role: "student"
};

const newUser = {
    ...user,
    role : "developer"
}

console.log(newUser);

