class Solution{
    getMoreAndLess(arr,n, x){
        //code here
        let  mx=0;
        let mn = 0;
        
        
         for(let i=0; i<n;i++){
            if(arr[i] <= x){
                mn++;
            }
            if(arr[i] >= x){
                mx++;
            }
        }
        return [mn,mx];
    }
}

