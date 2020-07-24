function getCount(str) {
    return str.split('').filter(value => ['a', 'e', 'i', 'o', 'u'].includes(value)).length;
}