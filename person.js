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

const me = new Employee("Kien", "Dang", 25, "Janitor", ["Health", "Money"]);

me.setName("Alexis Turner");
console.log(me.getBio());

const person2 = new Person("Clancey", "Turner", 51);

console.log(person2.getBio());
