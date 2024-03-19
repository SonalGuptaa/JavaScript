
class Solution{
    countOfElements(arr,n, x){
        //code here
  
       let cnt = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] <= x) {
                cnt++;
            }
            else {
                break; // Since the array is sorted, we can break early once we find an element greater than x
            }
        }
        return cnt;
    }
}