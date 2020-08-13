function findUniq(arr){         
    var map = arr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());  
    var mapDescendingOrder = new Map([...map.entries()].sort((a,b) => a[1] - b[1]));
    return mapDescendingOrder.entries().next().value[0];
}