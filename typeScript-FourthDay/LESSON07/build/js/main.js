"use strict";
// Index Signatures
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Ali: 43,
};
console.log(todaysTransactions);
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Books"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40; //? Index signature in type 'TransactionObj' only permits reading.
console.log(todaysTransactions["Ali"]);
const student = {
    name: "Dough",
    GPA: 3.5,
    classes: [100, 200],
};
student.ali = 4;
console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
const student = {
    name: "Dough",
    GPA: 3.5,
    classes: [100, 200],
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: "250",
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
