class Solution {
    findElements(arr,n){
       //code here
       
       //sort the array and print the array element upto n-2 ;
       arr.sort();
       let ans  = [];
       for(let i=0;i<n-2;i++)
       {
           ans.push(arr[i]);
       }
       return ans;
    }
}
