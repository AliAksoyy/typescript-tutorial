var Ali = /** @class */ (function () {
    function Ali(first, last, id, department) {
        this.first = first;
        this.last = last;
        this.id = id;
        this.department = department;
        this.salary = 444;
    }
    return Ali;
}());
var a = new Ali("a", "2", 3, "3");
console.log(a);
function beyda(calisan) {
    console.log(calisan.department);
}
beyda({ id: 2, department: "3", salary: 3 });
