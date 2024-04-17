class Solution{
    print2largest(arr,n){
        //code here
        let fl = arr[0];
        
        for(let i=0;i<n;i++)
        {
            if(arr[i] > fl)
            {
                fl = arr[i];
            }
        }
        
        let sl =-1;
        for(let j=0;j<n;j++)
        {
            if(arr[j] > sl && arr[j] != fl)
            {
                sl = arr[j];
            }
        }
        
        return sl;
    }
}