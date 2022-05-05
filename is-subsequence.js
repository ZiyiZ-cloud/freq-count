// add whatever parameters you deem necessary
function isSubsequence(str1,str2) {
    let i = 0;
    let j = 0;

    if ((str1.length) > (str2.length)) return false

    while(i<str1.length && j<str2.length){
        if(str1[i]===str2[j]){
            i++;
            j++
        }else{
            j++
        }
    }

    if(i>str1.length-1)return true
    return false
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'))