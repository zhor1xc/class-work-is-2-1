//const students = ["Андрей", "Иван", "Стас"];
//students[50] = "Индекс 50";
//console.log(students);


//let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304] ];
//college[1][1] = 112
//let kab = college[1][1]
//console.log(kab);

let number = [ 1, 2, 3, 4, 5, 6, 7 ]

const countLenght = 5;

if ( number.length === countLenght ) {
    console.log("ok");
} else if ( number.length < countLenght ) {
    let result = countLenght - number.length;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно увеличить до ${countLenght}. Прибавьте к массиву значение ${result}`);
} else if ( number.length > countLenght ) { 
    result = number.length - countLenght;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно уменьшить до ${countLenght}. Удалите из массива значение ${result}`)
}