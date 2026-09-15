//calculate the total quantity

const objects = [
    { name: "Laptop", quantity: 1 },
    { name: "Mouse", quantity: 2 }
]


const totalQuantity = objects.reduce((total, object) => total + object.quantity, 0)

console.log(totalQuantity);