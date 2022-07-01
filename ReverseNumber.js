function reverseNumber(num){
    let text = num.toString()
    let newDigit = "";


    for (let i = text.length - 1; i >= 0; i--) {
       newDigit += text[i];
    }
    parseInt(newDigit)
    console.log(newDigit)

    // return newDigit
}

reverseNumber(12)