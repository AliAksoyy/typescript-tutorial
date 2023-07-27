"use strict";
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = "kirikkale";
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const ali = new User("ali@gmail.com", "ali");
// ali.city = "2"; //?? Cannot assign to 'city' because it is a read-only property
console.log(ali);
// ali._courseCount //?? Property '_courseCount' is private and only accessible within class 'User'
// ali.deleteToken() // ?? Property 'deleteToken' is private and only accessible within class 'User'.ts(2341)
console.log(ali.getAppleEmail);
//?? buda kısa yol
class User1 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "kirikkale";
    }
}
let ali1 = new User1("ali@", "ali1");
// console.log(ali1);
