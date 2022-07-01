let arr1 = [3, 'b', 'a', 'a', 'f', 'f', 'b', 3, 'a', 'b', 4, 'b', 3];
function mostFrequentItemOfAnArray(arr){

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr.indexOf([i]) === arr[j]){
                count += 1;
            }
        }
        console.log(count)
    }
}

mostFrequentItemOfAnArray(arr1)