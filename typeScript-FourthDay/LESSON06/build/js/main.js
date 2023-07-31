"use strict";
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
class Coder1 {
    constructor(name, music, age, lang = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
let ali = new Coder1("ali", "neset", 3, "turkish");
console.log(ali);
console.log(ali.getAge());
// console.log(ali.age); //?Property 'age' is private and only accessible within class 'Coder1'
// console.log(ali.lang); // ?? Property 'lang' is protected and only accessible within class 'Coder1' and its subclasses
class WebDev extends Coder1 {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sarah", "Lofi", 25);
console.log(Sara);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action}`;
    }
}
let Page = new Guitarist("ali", "guitar");
console.log(Page.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const beyda = new Peeps("beyda");
const feyza = new Peeps("feyza");
console.log(Peeps.count);
console.log(feyza.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Param is not an array of strings");
        }
    }
}
const myBands = new Bands();
myBands.data = ["1", "2", "f"];
console.log(myBands.data);
myBands.data = [...myBands.data, "3", "5"];
console.log(myBands.data);
