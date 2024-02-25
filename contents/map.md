#Map Function 

It is basically used to transform a array. 
In Simple word "Transformation" means -- transform each value of the array and get a new array out of it.

Example: 
```

const doubleArr = num.map(double);
let nums = [1, 2, 3, 4, 5];
function double(nums) {
    return 2 * nums;
}

//the map() function is being used to create a new array (doubleArr) based on the original num array.
const doubleArr = nums.map(double);

console.log(doubleArr);
//Output -- [1,4,9,16,25]
```

```
//Triple the nums element
let nums = [1, 2, 3, 4, 5];

function triple(nums) {
    return 3 * nums;
}

const tripleArr = nums.map(double);

console.loh(tripleArr);

```

```
// Task 3: Convert nums elements to binary
let nums = [1, 2, 3, 4, 5];

function decimalToBinary(decimal) {
    return decimal.toString(2);
}

let output = nums.map(decimalToBinary);

// Defining the function inline within the map() function
let output = nums.map( function decimalToBinary(decimal) {
    return decimal.toString(2);
});

// arrow function can also be used :
const output = nums.map((x) => x.toString(2) );

console.log(output);
//[ '1', '10', '11', '100', '101' ]

```
So basically map function is mapping each and every value to another value and creating a new array , based on some given conditionIt's a higher-order function.
