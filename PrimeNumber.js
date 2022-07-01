function primeNumber(num){
    for (let i = 2; i <= num; i++) {
        if(num / i === 1 && num % i === 0){
            return num + " is a prime number"
        }
        else
            return num + " is not a prime number"
    }
}

primeNumber(7)