function number_1() {
    let a = 0;
    while (a <= 100){
        console.log(a++);
    }
}
// number_1();
function number_2() {
    let a = 0;
    do {
        if (a === 0) {
            console.log('це нуль')
        }
        else if(a % 2 == 1) {
            console.log(a + ' - це не парне число')
        }
        else {
            console.log(a + ' - це парне число')
        }
        a++;
    }while (a <= 10)
}
// number_2()
function number_3() {
    for (let i = 0; i <= 9; console.log(i++));
}
// number_3()
function number_5() {
    let numb = 10000;
    let count = 0;
    while (numb > 50){
        count++;
        numb /= 2;
    }
    let result = numb;
    console.log(`result = ${result}, count = ${count}`)
}
// number_5()
function number_6() {
    let monthNumber = prompt("Month number = ")
    if (monthNumber >=1 && monthNumber <=12){
        switch (parseInt(monthNumber)) {
            case 1:
                alert("Cічень, Зими");
                return;
            case 2:
                alert("Лютий, Зими");
                return;
            case 3:
                alert("Березень, Зими");
                return;
            case 4:
                alert("Квітень, Весна");
                return;
            case 5:
                alert("Травень, Весна");
                return;
            case 6:
                alert("Червень, Літо");
                return;
            case 7:
                alert("Липень, Літо");
                return;
            case 8:
                alert("Серпень, Літо");
                return;
            case 9:
                alert("Вересень, Осінь");
                return;
            case 10:
                alert("Жовтень, Осінь");
                return;
            case 11:
                alert("Листопад, Осінь");
                return;
            case 12:
                alert("Грудень, Зима");
                return;
        }
    }
}
// number_6()
function number_7(tc) {
    alert(((9.0/5.0)*tc) + 32)
}
function number_8() {
    let dayOfTheWeek = parseInt(prompt("Enter day of the week"))
    if (dayOfTheWeek >= 1 && dayOfTheWeek <= 7) {
        switch (dayOfTheWeek) {
            case 1:
                alert("Понеділок")
                break;
            case 2:
                alert("Вівторок")
                break;
            case 3:
                alert("Середа")
                break;
            case 4:
                alert("Четвер")
                break;
            case 5:
                alert("П'ятниця")
                break;
            case 6:
                alert("Субота")
                break;
            case 7:
                alert("Неділя")
                break;
        }
    }
    else {
        alert("The day of the week not found")
    }
}
// number_8()
function number_4(){
    //first
    let count = +prompt("Count = ");
    for (let i = 1; i <= count; i++) {
        let string = "";
        for (let j = 0; j < i; j++) {
            string+="*";
        }
        console.log(string);
    }
    // second
    for (let i = 1; i <= count; i++) {
        let countOfSymbols = count * 2 - 1;
        let countOfStarsInFloor = i * 2 - 1;
        let countOfSpacesInFloor = countOfSymbols - countOfStarsInFloor;
        let string = '';
        for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
         string += ' ';
        }
        let string1 = '';
        for (let j = 0; j < countOfStarsInFloor; j++) {
            string1 += '*';
        }
        let string2 = '';
        for (let j = 0; j < countOfSpacesInFloor; j++) {
            string2 += ' ';
        }
        console.log(string + string1 + ' '.repeat(countOfSpacesInFloor));
    }
    // third
    for (let i = 1; i < count / 2; i++) {
        let countOfStars = i * 2 - 1;
        let countOfSpaces = count - countOfStars;
        let string = '';
        for (let j = 0; j < countOfSpaces / 2; j++) {
            string += ' ';
        }
        let string1 = '';
        for (let j = 0; j < countOfStars; j++) {
            string1 += '*';
        }
        let string2 = '';
        for (let j = 0; j < countOfSpaces; j++) {
            string2 += ' ';
        }
        console.log(string + string1 + string2);
    }
    console.log('*'.repeat(count));
    for (let i = 1; i < count / 2; i++) {
        let Stars = count - 2*i;
        let countOfSpaces = count - Stars;
        let string3 = '';
        for (let j = 0; j < countOfSpaces / 2; j++) {
            string3 += ' ';
        }
        let string1 = '';
        for (let j = 0; j < Stars; j++) {
            string1 += '*';
        }
        let string2 = '';
        for (let j = 0; j < countOfSpaces; j++) {
            string2 += ' ';
        }
        console.log(string3 + string1 + string2);
    }
}
number_4();
