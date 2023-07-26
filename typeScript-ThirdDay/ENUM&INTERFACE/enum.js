"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let seat;
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;
// if (seat == 0) {
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "Aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 6] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 7] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 8] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
var ali = {
    dbId: 22,
    email: "ali",
    userId: 2,
    startTrail: function () {
        return "trail stated";
    },
    startTrailFn: function () {
        return "ali";
    }
};
console.log(ali);
// ali.dbId = 23; // ? Cannot assign to 'dbId' because it is a read-only property.
