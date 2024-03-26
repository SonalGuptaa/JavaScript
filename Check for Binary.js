class Solution{
    isBinary(str){
        //code here
        for(let i=0;i<str.length;i++)
        {
            if(str[i] != '0' && str[i] != '1')
            {
                return false;
            }
        }
        return true;
    }
}
