function findShort(s){         
    var map = s.split(' ').reduce((acc, e) => acc.set(e, e.length), new Map());  
    var mapDescendingOrder = new Map([...map.entries()].sort((a,b) => a[1] - b[1]));
    return mapDescendingOrder.entries().next().value[1];
}