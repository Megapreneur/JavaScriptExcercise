function farmInventoryPrinting(number, label){
    let numberString = String(number);
    while (numberString.length < 3){
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`)
}
function advanceFarmInventoryPrinting(cows, chickens, goats){
    farmInventoryPrinting(cows, "Cows")
    farmInventoryPrinting(chickens, "Chickens")
    farmInventoryPrinting(goats, "Goats")

}

advanceFarmInventoryPrinting(7, 15, 81)