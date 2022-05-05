// add whatever parameters you deem necessary
function separatePositive(arr) {
    const positive = [];
    const negative = [];
    for(let el in arr){
        if(arr[el]>0){
            positive.push(arr[el])
        }else{
            negative.push(arr[el])
        }
    }

    

    return positive.concat(negative);
}

console.log(separatePositive([2, -1, -3, 6, -8, 10]))