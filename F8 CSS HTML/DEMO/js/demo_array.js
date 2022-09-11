var students = [
    {
        id:1,
        name: 'An',
        job: 'staff'
    },
    {
        id:2,
        name: 'Quoc',
        job: 'waiter'
    },
    {
        id:3,
        name: 'Quoc',
        job: 'safer'
    }, 
    {
        id:4,
        name: 'Quoc',
        job: 'staff'
    }, {
        id:5,
        name: 'Quoc',
        job: 'ceo'
    },
]
console.log('array.forEach: Duyet qua tung phan tu trong mang');
students.forEach(function(student){
    console.log(student);
})
console.log('array.every: kiem tra tat ca cac phan tu trong mang co thoa man mot dieu kien hay khong');
var isAllStaff = students.every(function(student){
    return student.job === 'staff';
})
console.log(isAllStaff);
console.log('array.some: kiem tra tat ca cac phan tu trong mang co phan tu nao thoa man dieu khien khong');
var isStaff = students.some(function(student){
    return student.job === 'staff';
})
console.log(isStaff);