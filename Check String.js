class Solution {
    check(s){
       //code here
       let n =s.length;
       let i=0;
       let j = n-1;
       
       
       while(i< j)
       {
           if(s[i] != s[j])
           {
               return 0;
           }
           else
           {
               i++;
               j--;
           }
       }
       return 1;
    }
}