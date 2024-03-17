class Solution {
    printArray(arr, n) {
        // code here
        let str = "";
        for(let i=0;i<n;i++)
        {
            str += arr[i] + " ";
        }
       console.log(str);
    }
}