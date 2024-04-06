class Solution{
    modify(s){
        
        let result = [];
        let n= s.length;
        for(let i=0;i<n;i++)
        {
            if(s[i] != ' ')
            //   temp+= s[i];
            result.push(s[i]);
        }
       
       return result.join('');
        // return temp;
    }
}