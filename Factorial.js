function factorial(num){
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(result);
}

factorial(5)