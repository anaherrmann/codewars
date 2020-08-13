function duplicateCount(text){
    var map = text.toLowerCase().split('').reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
    var result = 0;
    for (let [key, value] of  map.entries()) {
        if(value >= 2){
            result++;
        }
    }
    return result;
}