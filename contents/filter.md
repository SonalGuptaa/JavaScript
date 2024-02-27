
#Filter Function 

filtered down to just the elements from the given array that pass the test implemented by the provided function.

Example 

```
//filter even values
const nums = [1,2,3,4,5,6,7,8,9,10];

function isEven(x){
    return x%2 == 0;
}
const output = nums.filter(isEven);
console.log(output);  //[ 2, 4, 6, 8, 10 ]
```

```
//filter odd values
const nums = [1,2,3,4,5,6,7,8,9,10];

function isOdd(x){
    return x%2 ;
}
const output = nums.filter(isOdd);
console.log(output); //[ 1, 3, 5, 7, 9 ]
```

```
//Divisible by 3
const nums = [1,2,3,4,5,6,7,8,9,10];

function Divisibleby3(x){
    return x%3==0 ;
}
const output = nums.filter(Divisibleby3);
console.log(output); //[ 3, 6, 9 ]
```
