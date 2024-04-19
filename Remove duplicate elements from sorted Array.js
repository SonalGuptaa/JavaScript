class Solution{
    remove_duplicate(arr,n){
        //code here
        
        // Use JavaScript Set because it is a collection of unique values. 
        let temp = new Set();
        for(let i=0;i<n;i++)
        {
            temp.add(arr[i]);
        }
         
         
        let distinctArr = Array.from(temp);
         for(let i = 0; i < distinctArr.length; i++) {
            arr[i] = distinctArr[i];
        }

        return distinctArr.length;
    
        }
}