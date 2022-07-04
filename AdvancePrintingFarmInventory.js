function zeroPad(number, width){
    let numberString = String(number);
    while (numberString.length < width){
        numberString = "0" + numberString;
    }
    return numberString;
}
function advanceFarmInventoryPrinting(cows, chickens, goats){
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(goats, 3)} Goats`);

}

advanceFarmInventoryPrinting(7, 15, 81)