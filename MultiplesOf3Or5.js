function solution(number){
    var count = 0;
    for(let i = 0; i < number; i++){
        if((i % 3 == 0) || (i % 5 == 0)){
            count += i;
        }
    }
    return count;
}