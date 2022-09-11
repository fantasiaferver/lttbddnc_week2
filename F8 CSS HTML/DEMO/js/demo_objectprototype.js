function Member(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Member.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

var Tuan = new Member("Nguyễn", "Vũ", 28);
console.log(Tuan);