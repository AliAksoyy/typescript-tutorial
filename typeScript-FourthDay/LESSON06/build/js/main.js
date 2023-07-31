"use strict";
// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: String;
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
