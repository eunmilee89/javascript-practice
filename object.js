// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {}; // 'Object literal' syntax
const obj2 = new Object(); // 'Object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const eunmi = { name: "eunmi", age: 24 };
print(eunmi);

// with JavaScript magic (dynamically typed language)
// can add properties later (but not recommended🚫)
eunmi.hasJob = true;
console.log(eunmi.hasJob);

// can delete properties later (but not recommended🚫)
delete eunmi.hasJob;
console.log(eunmi.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(eunmi.name);
console.log(eunmi["name"]);
eunmi["hasJob"] = true;
console.log(eunmi.hasJob); //true

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(eunmi, "name");
printValue(eunmi, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("eunmi", 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in eunmi); // true
console.log("age" in eunmi); // true
console.log("random" in eunmi); // false

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in eunmi) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 6];
for (value of array) {
  console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "eunmi", age: 20 };
const user2 = user;
user2.name = "coder";
console.log(user); // { name: "coder", age: 20 }

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
