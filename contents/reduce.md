#Reduce Function :

Take all the elements of array and come up with a single value


Syntax 
```js
reduce(callbackFn)
reduce(callbackFn, initialValue)

```
 The reduce() function in JavaScript indeed takes two arguments: 
 1) callbackFn
 2) initialValue (Optional)

`callbackFn`:
A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of `callbackFn`.

`currentValue`:
The value of the current element. On the first call, its value is `array[0]` if `initialValue` is specified; otherwise, its value is `array[1]`.

`accumulator`:
The value resulting from the previous call to `callbackFn`. On the first call, its value is `initialValue` if the latter is specified; otherwise, its value is `array[0]`.

The `second argument` to reduce() is optional and represents the `initial value of the accumulator`. If provided, the accumulator will start with this initial value. If omitted, the first element of the array will be used as the initial value of the accumulator, and iteration will start from the second element.
```js
const nums = [1,2,3,4,5,6,7,8,9,10];

function isOdd(x){
    return x%2;
}
const output = nums.filter(isOdd);
console.log(output);
```

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Traditional method to calculate the sum of all the elements of the array
function findSum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]; // Adding each element to the sum
    }
    return sum; // Returning the total sum
}
console.log(findSum(nums)); // Output: 55

// Using reduce() to calculate the sum of all the elements of the array
// acc represents the accumulated sum, curr represents the current element being processed
const output = nums.reduce(function(acc, curr) {
    acc = acc + curr; // Adding the current element to the accumulated sum
    return acc; // Returning the updated accumulated sum
});
console.log(output); // Output: 55
```

```js
const users = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "Jane", lastName: "Doe", age: 25 },
    { firstName: "Alice", lastName: "Smith", age: 30 },
    { firstName: "Bob", lastName: "Johnson", age: 25 }
];

const output = users.reduce(function(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]; // Increment count if age already exists in accumulator
    } else {
        acc[curr.age] = 1; // Initialize count to 1 if age is encountered for the first time
    }
    return acc; // Return accumulator in each iteration
}, {});

console.log(output);
```
