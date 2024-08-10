// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, expo){
    if (expo == 0) return 1;
    return base * power(base, expo - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));