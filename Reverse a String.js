
class Solution {
    revStr(s){
       //code here
        let reverseString = '';
        // console.log(reverseString);
        let lengthString = s.length - 1;
        for (lengthString; lengthString >= 0; lengthString--) {
            // console.log(lengthString,':', s[lengthString]);
        
            reverseString += s[lengthString];
            // console.log(reverseString);
        }
        
        return reverseString;
    }
}