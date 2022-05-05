// add whatever parameters you deem necessary
function countPairs(arr,target) {
    let count = 0;
    let s = new Set(arr)

    for (let el of s){
        let rest = target - el;
        arr = arr.pop(el)
        if(arr.has(rest)){
            count ++
        }
    }
    return count

}

console.log(countPairs([3,1,5,4,2], 6))