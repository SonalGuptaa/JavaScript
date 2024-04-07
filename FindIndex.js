class Solution {
    findIndex(arr,n,key){
       //code here
       let ans = [];
       
    //   let first;
       for(let i=0;i<n;i++)
       {
           if(arr[i] == key)
           {
               ans.push(i);
               break;
           }
       }
       
       for(let i=n;i>=0;i--)
       {
           if(arr[i] == key)
           {
               ans.push(i);
               break;
           }
           
       }
       if(ans.length == 0)
       {
           ans.push(-1,-1)
       }
       return ans;
    }
}2