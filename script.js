const person = {
  firstName: "Ade",
  lastName: "Amariya",
};

const user = person;

person["firstName"] = "Tolu";

console.log(person);
console.log(user);

// function registraion(fname, lname, unma){

// }

// function alaert(x) {
//   alert(x.innerHTML);
// }

class Registration {
  constructor(fname, lname, uname, year) {
    // this.firstName = fname;
    // this.lastName = lname;
    // this.year = year;
    // this.username = uname;

    //make it a practice to add _ to properties when you are using set and get
    this._firstName = fname;
    this._lastName = lname;
    this._year = year;
    this._username = uname;
  }

  displayFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set firstName(a) {
    this._firstName = a;
  }

  get firstName() {
    return this._firstName;
  }

  displayAge() {
    let date = new Date();
    let pyear = date.getFullYear();
    return pyear - this._year;
  }

  //static method can only be called by the class itself and not the object
  static greeting() {
    return "Good afternoon";
  }
}

let person1 = new Registration("Ade", "Faya", "Ayo", 1991);
let person2 = new Registration("Ade", "Tolu", "Kunle", 2007);

// Do not use () when using set and get
person1.firstName = "Aaaaaaa";
console.log(person1.firstName);

//calling a static method
console.log(Registration.greeting());

console.log(
  `${person1.displayFullName()} is ${person1.displayAge()} years old`
);
console.log(
  `${person2.displayFullName()} is ${person2.displayAge()} years old`
);

console.log(person1._username);
console.log(person2._username);
console.log(person1.displayFullName());
console.log(person2.displayFullName());
