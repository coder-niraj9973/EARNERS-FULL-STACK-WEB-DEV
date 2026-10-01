


// const random = () =>{
//     console.log(this);
// }

// Product()
// random()

// let user = {
//     name: "nishant"
// }
// user.phone= 8759749874
// console.log(user);


function Product(name, price) {
    this.name = name
    this.price = price
    return "hiii"
}

// const p1 = new Product("Iphone", 123456)
// const p2 = new Product("Samsung", 465789456)        //this is overwriting the p1

// console.log(p1);
// console.log(p2);


class User{
    // age = 4                         //default property
    country = "I"                       //instance me nahi milne par ye use hoga
    constructor(name, country){
        this.name = name       //instance property
        this.country = country       //instance property
    }


    printName(){
        console.log(this.name);
    }
}

// const u1 = new User("nishant", "india")
// const u2 = new User("Akshy", "india")

// u1.name = "Name updated"
// console.log(u1);




class BankAccount{
    #balance;                                   //this is private propwerty
    static totalBankAccount = 0;
    constructor(initialBalance){
        this.#balance = initialBalance
        BankAccount.totalBankAccount++;
    }

    get(){
        console.log(this.#balance);
    }

    withdraw(amount){
        if(amount > this.#balance){
            console.log("bete itne n hai tere pass");
            return
        }

        this.#balance = this.#balance - amount
    }

    deposit(amount){
        if(amount <= 0){
            console.log("Bete pagal nhi hu me ! garib!!!");
            return
        }
        this.#balance = this.#balance + amount
    }



    static calculateTax(){
        console.log("calculating tax...");
    }
}


let acc1 = new BankAccount(500)
let acc2 = new BankAccount(500)
let acc3 = new BankAccount(500)
let acc4 = new BankAccount(500)
let acc5 = new BankAccount(500)

// acc1.get();
// acc1.withdraw(500);
// acc1.get()
// acc1.deposit(14322)
// acc1.get()
// acc1.withdraw(14000)
// acc1.get()

// acc1.balance = 456465465

acc1.get()

acc1.deposit(-56)
acc1.get()
// acc1.calculateTax()             //error
console.log(BankAccount.totalBankAccount);