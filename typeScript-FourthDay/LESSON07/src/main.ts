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
