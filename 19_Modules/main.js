// Import named exports

import { add, multiply } from "./math.js";

console.log(add(10, 5));
console.log(multiply(10, 5));


// Import default + named exports

import getUser, { role, login } from "./user.js";

console.log(getUser());
console.log(role);
console.log(login());


// Rename a named import

import { add as addition } from "./math.js";

console.log(addition(20, 10));