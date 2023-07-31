// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   lang: String;

//   constructor(name: string, music: string, age: number, lang: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }
// }
// class Coder1 {
//   secondLang!: string;

//   constructor(
//     public readonly name: string,
//     public music: string,
//     private age: number,
//     protected lang: string = "typescript"
//   ) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.lang = lang;
//   }

//   public getAge() {
//     return `Hello I'm ${this.age}`;
//   }
// }

// let ali = new Coder1("ali", "neset", 3, "turkish");
// console.log(ali);
// console.log(ali.getAge());
// // console.log(ali.age); //?Property 'age' is private and only accessible within class 'Coder1'
// // console.log(ali.lang); // ?? Property 'lang' is protected and only accessible within class 'Coder1' and its subclasses

// class WebDev extends Coder1 {
//   constructor(
//     public computer: string,
//     name: string,
//     music: string,
//     age: number
//   ) {
//     super(name, music, age);
//     this.computer = computer;
//   }

//   public getLang() {
//     return `I write ${this.lang}`;
//   }
// }

// const Sara = new WebDev("Mac","Sarah","Lofi",25);
// console.log(Sara)

// interface Musician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }

// class Guitarist implements Musician {
//   name: string;
//   instrument: string;

//   constructor(name: string, instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }

//   play(action: string): string {
//     return `${this.name} ${action}`;
//   }
// }

// let Page = new Guitarist("ali", "guitar");
// console.log(Page.play("strums"));

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const beyda = new Peeps("beyda");
const feyza = new Peeps("feyza");

console.log(Peeps.count);
console.log(feyza.id);
