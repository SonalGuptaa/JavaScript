
class Solution {
    removeVowels(s){
       //code here
       let n=s.length;
       let str = '';
       for(let i=0;i<n;i++)
       {
           if(s[i]== 'a' || s[i]== 'e' || s[i]== 'i' || s[i]== 'o' || s[i]== 'u')
           {
            //   str+= s[i];
            continue;
           }
           else
           {
               str+=s[i];
           }
       }
       return str;
       //   console.log (n);
    }
}