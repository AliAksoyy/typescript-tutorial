"use strict";
// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 75 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// Required and Readonly Types
const recordAssignment = (assign) => {
    //send to database, etc..
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 77 //?? Cannot assign to 'grade' because it is a read-only property.
console.log(assignVerified);
recordAssignment(assignGraded);
// Record Type
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 1, assign2: 3 },
    Kelly: { assign1: 1, assign2: 5 },
};
console.log(gradeData);
const score = {
    studentId: "studentId",
    grade: 78,
};
const preview = {
    studentId: "k123",
    title: "Final Project",
};
