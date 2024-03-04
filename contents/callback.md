
`JavaScript` is a synchronous, single-threaded language, managing tasks within one call stack, thus executing one task at a time for efficient processing.
Whatever code we give to Javascript will be quickly executed by Javascript engine, it does not wait.

```js
console.log("Namaste");
console.log("JavaScript");
console.log("Season 2");
// Namaste
// JavaScript
// Season 2

// 💡 It is quickly printing because `Time, tide & Javascript waits for none.`
```
A callback is a function that is passed as an argument to another function.

`Callbacks` play a crucial role in JavaScript for writing asynchronous code.

```js
function greeting(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greeting("Alice", sayGoodbye);
```
There are two parts of Callbacks:

-Callbacks enable handling asynchronous tasks efficiently in JavaScript, enhancing code flexibility.

-However, they can lead to callback hell and inversion of control, making code harder to manage and understand.
