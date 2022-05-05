// add whatever parameters you deem necessary
function sameFrequency(num1,num2) {


    while(num1 && num2 !=0){
        num1 =  Math.floor(num1/10)
        num2 =  Math.floor(num2/10)
    }
    if(num1===0 && num2 ===0) return true
    return false

}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14) )// false
console.log(sameFrequency(3589578, 5879385) )// true
console.log(sameFrequency(22,222) )// false
console.log(sameFrequency(0,0) )
console.log(sameFrequency(1,931313) )