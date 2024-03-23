class Solution {
    sum(arr,n) {
        // code here
        let sum =0 ;
        for(let i=0;i<n;i++)
        {
            sum+= arr[i];
        }
        return sum;
    }
}