"use strict";
exports.__esModule = true;
exports.concat = exports.hello = void 0;
function hello(name) {
    console.log("Hello " + name);
}
exports.hello = hello;
var firstName = "bob";
hello(firstName);
hello(firstName + " marley");
function concat(a, b) {
    return a + b;
}
exports.concat = concat;
var wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
