const binaryArrayToNumber = arr => {
    var result = 0;
    for(let i = 0; i < arr.length; i++){                    
        result += arr[arr.length-1-i] * Math.pow(2, i);
    }
    return result;
};