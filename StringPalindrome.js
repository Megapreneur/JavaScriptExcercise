// function StringPalindrome(word){
//     const letter = word.split(" ")
//     letter.forEach(n)
//     for (let i = 0; i < letter.length; i++) {
//         if(letter[i] === letter[letter.length-1]){
//             if ()
//         }
//
//     }
//
// }


function pal(num){
    let saved= "";
    for(let i = num.length-1; i >= 0; i--){
        saved += num[i]
    }
    if(saved === num){
        console.log(num + " = "+ saved + "  is a palindrome");
    }else console.log(num +" = "+ saved + " is not a palindrome")
}

pal("ebube")
pal("steven")
pal("1221")
pal("1234")