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

    gradeAssignment(student) {
        let score = Math.round(Math.random() * 100);
        student.grade = (student.grade + score)/2;
        if (score < 65) {
            return `${student.name}, please see me after class. A score of ${score} is unnacceptable.`;
        } else if (score < 85) {
            return `${student.name}, your score of ${score} will suffice.`
        } else {
            return `${student.name}, you did very well on this assignment with a score of ${score}. You're amazing!`
        }
    }
}

class Student extends Person {
    constructor(stuAttrs) {
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
        this.grade = stuAttrs.grade;
    }

    listsSubjects() {
       for (let i = 0; i < this.favSubjects.length; i++) {
           console.log(this.favSubjects[i]);
       }
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(pMAtters) {
        super(pMAtters);
        this.gradClassName = pMAtters.gradClassName;
        this.favInstructor = pMAtters.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announes to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const albus = new Instructor({
	name: 'Albus Dumbledore',
	location: 'Hogwarts',
	age: 150,
	gender: 'male',
	favLanguage: 'C',
	specialty: 'Magic',
	catchPhrase: 'It does not do to dwell on dreams and forget to live.'
});

const honey = new Instructor({
	name: 'Miss Honey',
	location: 'England',
	age: 32,
	gender: 'female',
	favLanguage: 'JavaScript',
	specialty: 'telekinesis',
	catchPhrase: 'You are an ubelievably precocious child.'
});

const kevin = new Student({
	name: 'Kevin',
	location: 'Wisconsin',
	age: 31,
	gender: 'male',
	previousBackground: 'customer service',
	className: 'Web17',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 95
});

const alexis = new Student({
	name: 'Alexis',
	location: 'Wisconsin',
	age: 37,
	gender: 'female',
	previousBackground: 'photography',
	className: 'potential student',
    favSubjects: ['UX', 'Photoshop'],
    grade: 80
});

const fake = new ProjectManager({
	name: 'Fake PM',
	location: 'The Cloud',
	age: 88,
	gender: 'intersex',
	favLanguage: 'All of them',
	specialty: 'Every single specialty.',
	catchPhrase: 'I wish I were more creative',
	gradClassName: 'Web -1',
	favInstructor: albus
});

const blank = new ProjectManager({
	name: 'BlankMan',
	location: 'NYC',
	age: 35,
	gender: 'male',
	favLanguage: 'HTML',
	specialty: 'front-end',
	catchPhrase: 'Slap me around and call me Susan!',
	gradClassName: 'Web50',
	favInstructor: honey
});

console.log(albus.speak());
console.log(albus.demo(`Defense Against the Dark Arts`));
console.log(honey.grade(kevin, `JavaScript`));
kevin.listsSubjects();
console.log(kevin.PRAssignment(`JavaScript-IV`));
console.log(alexis.sprintChallenge(`Advanced CSS`));
console.log(fake.standUp(`web17_fake`));
console.log(blank.debugsCode(alexis, `Advanced CSS`));

console.log(kevin.grade);
console.log(blank.gradeAssignment(kevin));
console.log(kevin.grade);