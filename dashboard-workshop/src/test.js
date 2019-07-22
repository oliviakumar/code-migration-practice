"use strict";

// Default binding
function foo() {
  console.log(this);
}

foo();

// Implicit binding
const test = {
  name: 'Joona',
  sayHello: function() {
    console.log(this.name); 
  }
};

foo();

test.sayHello();

const newFunc = test.sayHello;

// newFunc();

// New binding

function Person(name) {
  this.name = name;

  this.sayHello = function() {
    console.log(this.name);
  }
}

const person = new Person('Joona');

person.sayHello();

// Explicit binding

newFunc.call(test);

const person2 = {
  name: 'Olivia',
}

newFunc.call(person2);
