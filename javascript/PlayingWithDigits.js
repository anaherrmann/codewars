function digPow(n, p){
    var result = 1;
    var arr = n.toString().split('');
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += Math.pow(arr[i], p);
        p++;
    }
    while(result != n){
        if((sum / result) == n){
            return result;
        }
        if((sum / result) < n){
            break;
        }
        else{
            result++;
        }
    }
    return -1;
}