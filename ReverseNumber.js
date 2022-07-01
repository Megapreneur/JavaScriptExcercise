function reverseNumber(num){
    let text = num.toString()
    let newDigit = "";


    for (let i = text.length - 1; i >= 0; i--) {
       newDigit += text[i];
    }
    console.log(newDigit)
    parseInt(newDigit)
    return newDigit
}

reverseNumber(1234)