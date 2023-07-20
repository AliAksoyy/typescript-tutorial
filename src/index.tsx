export {}
console.log("hello typescript")


interface IPerson {
  name:string
}

interface IEmployee {
  id:number,
  salary:number,
  depart:string
}

class Instructor implements IPerson, IEmployee {
  name:string;

  constructor(name:string, public id:number, public salary:number, public depart:string){
    this.name=name
  }
}

let ali = new Instructor("ali", 1,15,"front")
console.log(ali)

function calis(value:IEmployee):void{
  console.log(value.id + " " + value.salary + " " + value.depart )
}

calis({id:3, salary:3,depart:"2"})