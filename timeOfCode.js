function sumOfAll(n){
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;    
    }
    return total;
}
function sumOfAll(n){
   
    return n * (n +1) /2;
}

let time1 = performance.now();
console.log(sumOfAll(1000000000));
let time2 = performance.now();
console.log(`your time ${(time2-time1) / 1000}`)