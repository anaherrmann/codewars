function sumDigPow(a, b){
    var result = [];
    for(let i = a; i <= b; i++){
        var arr = i.toString().split('');
        var sum = 0;
        for(let j = 0; j < arr.length; j++){
            sum += Math.pow(arr[j], j+1);
        }
        if(sum == i){
            result.push(i);
        }
    }
    return result;
}