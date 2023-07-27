"use strict";
class User {
    constructor(email, name) {
        this.city = "kirikkale";
        this.email = email;
        this.name = name;
    }
}
const ali = new User("ali@gmail.com", "ali");
// ali.city = "2"; //?? Cannot assign to 'city' because it is a read-only property
console.log(ali);
