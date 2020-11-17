function descendingOrder(n){
    var numArray = n.toString().split('');
    numArray = numArray.sort();
    numArray = numArray.reverse();
    numArray = numArray.join('');
    return parseInt(numArray, 10);
}