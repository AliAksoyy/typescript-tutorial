"use strict";
// // Index Signatures
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: "250",
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
