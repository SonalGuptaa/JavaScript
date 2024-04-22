//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let S = readLine().trim();
        let obj = new Solution();
        let res=obj.isPalindrome(S);
        console.log(res);
    
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S
 * @return {number}
*/

class Solution {
    
    isPalindrome(S){
        //code here
        let i=0;
        let j = S.length-1;
        
        while(i<j)
        {
            if(S[i] !== S[j])
            {
                return 0;
            }
            i++;
            j--;
        }
        return 1;
        
        
        // const strRev =  S.split('').reverse().join('');
        // if(S == strRev)
        // {
        //     return 1;
        // }
        // return 0;
    }
}