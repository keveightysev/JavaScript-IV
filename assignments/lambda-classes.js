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

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(stuAttrs) {
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    springChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pMAtters) {
        super(pMAtters);
        this.gradClassName = pMAtters.gradClassName;
        this.favInstructor = pMAtters.favInstructor;
    }

    standUp(channel) {
        `${this.name} announes to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}