// Given a string str, convert the first letter of each word in the string to uppercase. 


class Solution {
    transform(s) {
        let chars = s.split('');  
        
        if (chars[0] >= 'a' && chars[0] <= 'z') {
            chars[0] = chars[0].toUpperCase();          }
        
        for (let i = 1; i < chars.length; i++) {
            if (chars[i - 1] == ' ' && chars[i] >= 'a' && chars[i] <= 'z') {
                chars[i] = chars[i].toUpperCase();  
            }
        }
        
        return chars.join('');  
    }
}