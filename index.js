function isPolidrom(word) {
    let istemp = ''
    for (let i = word.length - 1; i >= 0; i--) {
        istemp += word[i]
    }
    if(istemp == word) {
        return console.log('isPolidrom')
    }
    console.log('is not polidrom')
 }
isPolidrom('лол')
// first work test is completed :D !!