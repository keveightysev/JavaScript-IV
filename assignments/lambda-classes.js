// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.location = attrs.location;
        this.age = attrs.age;
        this.gender = attrs.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}