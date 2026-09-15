//add a new property using map()

const objects = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
]

const inStocked = objects.map(user => ({
    ...user,
    inStock : true,
}));

console.log(inStocked);
