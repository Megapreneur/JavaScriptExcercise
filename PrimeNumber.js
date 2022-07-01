// function primeNumber(num){
//     for (let i = 2; i <= num; i++) {
//         if(num / i === 1 && num % i === 0){
//             return num + " is a prime number"
//         }
//         else
//             return num + " is not a prime number"
//     }
// }
//
// primeNumber(7)

function primeNumber(num){
    let value, count = 0;
    for (value = 1; value <= num; value++) {
        if (num % value === 0)
            count++;
    }
    if (count <= 2 ){
        return true;
    }
    else {
        return false;
    }
}
console.log(primeNumber(9))