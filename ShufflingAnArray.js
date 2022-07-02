function shufflingAnArray(array){
    let num = [ ];
    for (let i = 0; i < 10; i++) {
        num[i] = Math.floor(Math.random() * 11);

    }
    console.log(num);

}

shufflingAnArray()