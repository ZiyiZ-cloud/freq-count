function validAnagram(str1,str2){

    
    if(str1.length!==str2.length) return false;
    str1Freq = makeFreqCounter(str1);
    str2Fre = makeFreqCounter(str2);
    for(let key in str1Freq){
        if(!str2Fre[key]) return false;
        if(str1Freq[key] != str2Fre[key]) return false
    }
    return true

} 
function makeFreqCounter (str){
    const freqCounter = {};
    for(let idx = 0; idx<str.length;idx++){
        freqCounter[str[idx]] = (freqCounter[str[idx]]+1)||1;
    }
    return freqCounter;
}

console.log(validAnagram("",""))
console.log(validAnagram("azzz","zzza"))
console.log(validAnagram("anagram","nagaram"))
console.log(validAnagram("rat","car"))
console.log(validAnagram("awesome","awesom"))
console.log(validAnagram("qwerty","qewyrt"))
