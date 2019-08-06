class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;

    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}.`;
    });

    return bio;
  }

  setName(fullName) {
    const name = fullName.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}`;
  }

  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }

  getBio() {
    return this.grade > 70
      ? `${this.firstName} is passing with a grade of ${this.grade}`
      : `${this.firstName} is failing with a grade of ${this.grade}`;
    // if (this.grade > 70) {
    //   return `${this.firstName} is passing with a grade of ${this.grade}`;
    // } else {
    //   return `${this.firstName} is failing with a grade of ${this.grade}`;
    // }
  }

  updateGrade(grade) {
    return (this.grade += grade);
  }
}

const boy = new Student("Barnacle", "Boy", 21, 76, ["Nothing"]);

console.log(boy.getBio());

boy.updateGrade(-30);

console.log(boy.grade);

console.log(boy.getBio());
