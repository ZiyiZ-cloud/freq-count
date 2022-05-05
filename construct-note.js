// add whatever parameters you deem necessary
function constructNote(str1,str2) {

    function makeFreq(str){
        const freq = {};
        for(let idx = 0;idx<str.length;idx++){
            freq[str[idx]] = freq[str[idx]]+1 || 1
        }
        return freq;
    }

    const f1 = makeFreq(str1);
    const f2 = makeFreq(str2);

    for(let key in f1){
        if(f1[key] > f2[key]) return false
    }

    return true;

}

console.log(constructNote('aa', 'abc'))
console.log(constructNote('abc', 'dcba'))
console.log(constructNote('aabbcc', 'bcabcaddff'))