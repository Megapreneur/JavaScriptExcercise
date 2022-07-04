
function convertNumberToRoman(number){
    let thousands = ['', 'M', 'MM', 'MMM'];
    let hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    let result = thousands[number / 1000] + hundreds[(number % 1000) / 100] + tens[(number % 100) / 10] + units[number % 10];
    console.log(result)
}

convertNumberToRoman(17)
