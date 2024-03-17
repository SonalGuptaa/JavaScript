
class Solution {
    print(arr,n){
      //code here
      let str = "";
      for (let i = 0; i < n; i += 2) {
          str += arr[i] + " ";
      }
      console.log(str);
    }
  }