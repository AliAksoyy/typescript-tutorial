// Index Signatures

// interface TransactionObj {
//   readonly [index: string]: number;
// }
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Ali: 43,
};

console.log(todaysTransactions);
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Books"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40; //? Index signature in type 'TransactionObj' only permits reading.

console.log(todaysTransactions["Ali"]);

interface Student {
  [key: string]: string | number | number[] | boolean[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Dough",
  GPA: 3.5,
  classes: [100, 200],
};
student.ali = 4;

console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

interface Student1 {
  //   [key: string]: string | number | number[] | boolean[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student1 = {
  name: "Dough",
  GPA: 3.5,
  classes: [100, 200],
};

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student1]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof Student1]);
});

const logStudentKey = (student: Student1, key: keyof Student1): void => {
  console.log(`Student ${key} ${student[key]}`);
};

logStudentKey(student, "GPA");

interface Incomes {
  [key: string]: number;
}

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncome: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: "250",
};

for (const revenue in monthlyIncome) {
  console.log(monthlyIncome[revenue as keyof Incomes]);
}
