function shufflingAnArray(){
    let num = [''];
    for (let i = 0; i < 6; i++) {
        num[i] = Math.floor(Math.random() * 11);

    }
    console.log(num);

}

shufflingAnArray()