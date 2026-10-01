

let user1 = {
    name: "Ranit",
    age: 23,

    // printName(){
    //     console.log(`Hii , I am ${this.name}`);
    // }
}

let user2 = {
    name: "Manshi",
    age: 25,

}

let user3 = {
    name: "Taushif",
    age: 205,

}


function printName() {
    console.log(`Hii , I am ${this.name}`);
}

printName.call(user1)

// user1.printName();

// user1.printName.call(user2)
// user1.printName.call(user3)