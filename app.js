// 'use strict';
console.log('welcome to this');

// this in global obj

console.log(this);

// this in function

function a() {
  console.log(this); // the value of this keyword inside a funciton is undefined but, javascript has this subtitution so thw value become equal to global object  if you not use the strict mode
  /*
  this will point to the global object -- non strict mode -- (this substitution)
  this will be undefined -- strict mode

  this substitution happens in only function non-strict mode

  If strict mode is OFF:
    If this === undefined or null → this = global object (this substitution)`
  If strict mode is ON:
  If this === undefined or null → this stays undefined/null
  
  */
}

a();
window.a();
// this subtitution
/*
    if the value of 'this' keyowrd undefined or null
    this will be  replaced with global object -- only in non-strict mode
*/

// function and method
// if you if you make. funciton as a part of object then it is known as menthod.

const obj = {
  a: 10,
  x: function () {
    // x is an method of object obj
    console.log(this.a); // this --> entire obj and this.a === this.obj.a `this.a means object of a`
  },
};

obj.x();

// call apply bind --- used  when you have to share the method.

const emp = {
  name: 'kashi',
  printRole: function () {
    console.log(this); // kashi
  },
};
emp.printRole();

const emp2 = {
  name: 'bhushan',
};

emp.printRole.call(emp2); // bhushan

// value of this can be modified using call apply and bind menthod

// arrow function // they dont have their own this binding.
// arrow funciton do not have their own this, --- arrow funcitons take the value of their laxical env where they are enclosed.

const example = {
  a: 100,
  y: function () {
    console.log(this); // normal fucntion.
  },
};
example.y();

const example2 = {
  a: 100,
  y2: () => {
    console.log(this); // arrow function dose not have their own this so it takes the value if it's laxical env where they are enclosed here it's laxical scope is the global object, so this is pointing to the global window object.
  },
};
example2.y2();

// senario
const ex2 = {
  a: 'radha',
  b: function () {
    // enclosing laxical context
    const c = () => {
      console.log(this); // this arrow function is an part of the method b of object ex2 so now it will point to the current object as it's laxically enclosed with the method of the objet ex2 which is b.
    };
    c();
  },
};
ex2.b();

const outerThis = this;

// const func = () => {
//   console.log(this === outerThis);
// };

// new func();
// console.log(func.bind({})());
// func.call(null); //true
// func.apply(undefined); //true

/*
1- The value of this is usually determined by a functions execution context.

2- In the global scope, this refers to the global object (the window object).

3- The object that is standing before the dot is what the this keyword will be bound to.

4- We can set the value of this explicitly with call(), bind(), and apply()

5- When the new keyword is used(a constructor), this is bound to the new object being created.

6- Arrow Functions don’t bind this — instead, this is bound lexically (i.e. based on the original context)
*/
console.log('callbacks');
function logThis() {
  //   'use strict';
  console.log(this);
}

[1, 2, 3].forEach(logThis); // undefined, undefined, undefined
[1, 2, 3].forEach(logThis, { name: 'obj' });

function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]
bar.call('foo'); // [object String]
bar.call(undefined); // [object Window]

// When called as a listener, turns the related element blue
function bluify(e) {
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
const elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (const element of elements) {
  element.addEventListener('click', bluify, false);
}
