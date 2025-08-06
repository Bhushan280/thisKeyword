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

// this subtitution
/*
    if the value of 'this' keyowrd undefined or null
    this will be  replaced with global object -- only in non-strict mode
*/
