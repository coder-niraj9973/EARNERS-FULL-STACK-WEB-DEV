//calculate the final cart total

const cart = [
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 }
]

const total = cart.reduce((total, item) =>{
    return total + (item.price * item.quantity);
}, 0)

console.log(total);