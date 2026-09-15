//copy an object using spread

const user = {
    name: "Rahul",
    role: "developer"
};

const newUser = {
    ...user
}
console.log(newUser);
