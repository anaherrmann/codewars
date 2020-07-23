function solution(a, b){
  var result = a.length < b.length ? a + b + a : b + a + b; 
  return result;
}