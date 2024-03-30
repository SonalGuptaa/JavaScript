swapKth(n, k, arr) {
    // code here
    
    let t1 = arr[k-1];
    let t2 = arr[n-k];
    
    // Change the value of arr[2] and arr[7]\
    
    arr[k-1] = t2;
    arr[n-k] = t1;
}

