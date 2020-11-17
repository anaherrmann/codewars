function findOdd(A) {
    var map = A.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());                
    for (let [key, value] of  map.entries()) {
        if(value % 2 !== 0){
            return key;
        }
    }
}