const seconds = (total) => total % 60.0;
//console.log(seconds(5));
const perimetr = (side, count) => side*count;
//console.log(perimetr(3,3));
const fun3 = (n) => {
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i + 1;
    }
    arr.forEach((v) => (v%3===0 && v%5===0) ? console.log("fizzbuzz") : ((v%5 === 0) ? console.log("buzz") : (v%3===0) ? console.log("fizz"): 0));
}
//fun3(15);
function calculate (a, b, c) {
    let n = a + b + c;
    let arr = new Array(a, b, c);
    let result = n / arr.length;
    console.log(result);
}
// calculate(1, 3, 14)
function isDivisible (n, x, y) {
    // let flag = false;
    let arr = new Array(n, x, y);
    for (let i = 0; i < arr.length; i++) {
        //if (arr[i] > 0) {
            // if (arr[0] % arr[1] == 0 && arr[0] % arr[2] ==0) {
            //     flag = true;
            //     console.log(flag)
            // }
            // else {
            //     console.log(flag)
            // }
        //}
       // let flag = (arr[i] > 0 && (arr[0] % arr[1] == 0 && arr[0] % arr[2] ==0)) ? true : false;
        //console.log(flag);
        console.log(arr[i] > 0 && (arr[0] % arr[1] == 0 && arr[0] % arr[2] == 0));
    }
}
//isDivisible(6, 3, 2)
let sum = 0;
let average = 0;
let min = 0;
let max = 0;
let arr = new Array(12, 11, 45, 23, 14, 1);
for (let i = 0; i < arr.length; i++) {
    min = Math.min.apply(null, arr)
    max = Math.max.apply(null, arr)
    sum += arr[i];
    average = sum / arr.length;
}
// console.log(min);
// console.log(max);
// console.log(sum);
// console.log(average);

function fun7(){
    let arr = [5];
    for (let i = 0; i < 5; i++) {
        arr[i] = [5];
        for (let j = 0; j < 5; j++) {
            if(Math.random() < 0.5){
                arr[i][j] = 2;
            }
            else{
                arr[i][j] = -2;
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        if(arr[i][i] < 0){
            arr[i][i] = 0;
        }
        else{
            arr[i][i] = 1;
        }
    }
    arr.forEach((v)=> console.log(v));
}
// fun7();
// function Add(a, b) {
//     return a + b
// }
// console.log(Add(2,4))
//
// function Sub(a, b){
//     return a - b
// }
// console.log(Sub(4, 2))
//
// function Mul(a, b){
//     return a * b
// }
// console.log(Mul(2,4))
//
// function Div(a, b){
//     if (b == 0)
//         console.log('b can not be equal 0')
//     else
//     return a / b
// }
// console.log(Div(4,2))
// function isAlive(a){
//     if (a>0){
//         console.log('Your number is positive')
//     }
//     else console.log('Your number is negative')
//
//     if (a % 2 == 0 && a % 5 == 0 && a % 3 == 0 && a % 6 == 0 && a % 9 == 0){
//         console.log('Число а делиться без остачи')
//     }
//     else console.log('Число а имеет остачу от деления')
//
// }

function fun10(arr){
    return arr.filter((v)=> isNaN(v)).map((v) => v*=v).reverse();
}
console.log(fun10([1,2,3,4,5]).forEach((v) => console.log(v)));
