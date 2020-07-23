function arrayDiff(a, b) {
    var result = [];
    for(let i = 0; i < a.length; i++){
      b.indexOf(a[i]) == -1 ? result.push(a[i]) : false;
    }
    return result;
}