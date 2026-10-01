

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() { console.log("Login"); }
    logout() { console.log("Logout"); }

}


class Customer extends User {
    cart = []

    constructor(name, email) {
        super(name, email)
        // this.name = name;
        // this.email = email;
    }

    addProduct() { console.log("buy Product") }
    addToCart(item) { this.cart.push(item) }
    showCartItems() { console.log(this.cart); }
    // login() { }
    // logout() { }

}


class Seller extends User {

    // constructor(name, email) {
    //     // this.name = name;
    //     // this.name = email;
    // }

    addProduct() { }
    // login() { }
    // logout() { }
}

class Admin extends User {

    // constructor(name, email) {
    //     this.name = name;
    //     this.name = email;
    // }

    hideProduct() { console.log("Hide Product"); }
    // login() { }
    // logout() { }
}


class PremiumCustomer extends Customer {
    constructor(name, email) {
        super(name, email)
    }
}


const c1 = new Customer("nishant", "Nirha@gmail.com")
const s1 = new Seller("Niraj", "asadvgs@gmail.com")
const a1 = new Admin("Ajay", "admin123@gmail.com")

console.log(c1);

// console.log(s1);
// console.log(a1);
// c1.logout()

c1.addToCart("macbook")
c1.showCartItems()