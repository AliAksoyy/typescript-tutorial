class User {
  email: string;
  name: string;
  readonly city: string = "kirikkale";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const ali = new User("ali@gmail.com", "ali");
// ali.city = "2"; //?? Cannot assign to 'city' because it is a read-only property
console.log(ali);
