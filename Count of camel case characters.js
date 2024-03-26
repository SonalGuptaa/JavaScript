class Solution{
    countCamelCase(s){
        //code here
        let cnt = 0;
        for(let i=0;i<s.length;i++)
        {
             if (s[i] === s[i].toUpperCase() && s[i] !== s[i].toLowerCase())
            {
                cnt++;
            }
        }
        return cnt;
    }
}


