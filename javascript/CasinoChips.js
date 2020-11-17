function solve(arr){
    arr.sort(function(a, b) {
        return a - b;
    });
    var count = 0;
    while(arr[0] > 0){
            count++;
        if((arr[2] - arr[1])){
            arr[2]--;
        }
        else {
            arr[1]--;
        }
        arr[0]--;
    }
    return count+arr[1];
}