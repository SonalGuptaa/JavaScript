class Solution{
    valueEqualToIndex(arr,n){
        //code here
        // let x;
        let temp = [];
        for(let i=0;i<n;i++)
        {
            if(arr[i] == i+1)
               temp.push(arr[i]);
            //   return arr[i];
        }
        return temp;
    }
}
