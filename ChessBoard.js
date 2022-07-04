// for (let i = 0; i < ; i++) {
//     for (let j = 0; j < ; j++) {
//
//     }
//
// }

// function addTwo(x){
//     let p = x + 2
//     return p
// }
// function callAddTwo(x){
//     return x
// }
// function displayCallAddTwo(param){
//     console.log(param)
// }
// displayCallAddTwo(callAddTwo(addTwo(2)))

//
// let add = (a) => {
//     let sum = a + a
//     return sum
// }
// console.log(add(2))
//
// function chicken(){
//     return egg();
// }
// function egg(){
//     return chicken();
// }
//
// console.log(chicken() + " came first.");

const handleClick = (aFunction) => {
    let x = 2
    aFunction(x)

}
handleClick((e) => console.log(e))