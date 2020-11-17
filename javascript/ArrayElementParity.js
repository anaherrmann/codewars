function solve(arr){
    for(let i = 0; i < arr.length; i++){
        var index = arr.indexOf(-arr[i]);
        if(index == -1){
            return arr[i];
        }
    }
};