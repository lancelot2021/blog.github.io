let dog = {
    name: "Sharik",
    age: 2,
    breed: "Layka",
    voice : function () {
        console.log("Gav Gav Gav")
    }
};
dog.voice()

let cat = new Object();
cat.name = "Anfisa";
cat.age = 3;
cat.breed = "Karacal";
cat.sleep = function () {
    console.log(cat.name + " is sleeping")
}
cat.sleep()

class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    voice() {
        alert("Gav Gav Gav")
    }
}
let animal = new Animal("Bolto", 3, "Dog");
animal.voice();

let horse = new Object();
horse['name'] = 'Mustang';
horse['age'] = 5;
horse['breed'] = 'Parnokopitni';
console.log(horse)
