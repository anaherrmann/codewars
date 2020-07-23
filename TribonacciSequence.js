function tribonacci(signature,n){
    if(signature.length < 3 || n === 0 || n < 0){
        return new Array;
    }
    for(let i = 0; i < n-3; i++){
        signature.push(signature[i] + signature[i+1] + signature[i+2]);
    }
    return signature.slice(0, n);
}