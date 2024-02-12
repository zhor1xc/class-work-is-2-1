//const students = ["Tom", "bob", "Harry", "Ron", "Stan", "Stan32"];
//for (let i = 0; i < students.length; i++) {
//    let result = students[i];
//    console.log(result);
//}

//let people =[["Tom", 18], ["Bob", 17], ["Stan", 36]];
//for (let i = 0; i < people.length; i++) {
//    for (let j = 0; j < people[i].length; j++){
//        let result = people[i][j];
//        console.log(result);
//    }
//}

// const students = ["Tom", "bob", "Harry", "Ron"];

// in - индексы массива
// of - элементы массива

// for (let item of students) {
//     console.log(students[item]);
// }

const person = { name: "Tom", age: 23 };

for (let item in person) {
    console.log(item, person[item]);
}