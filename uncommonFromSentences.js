var uncommonFromSentences = function(A, B) {
    let sentence = A + " " + B;
    let words = sentence.split(' ');
    
    let key = {};
    let result = [];
    
    for (let i = 0; i < words.length; i++){
        if (key[words[i]]){
            key[words[i]] ++;
            ;
        }
        else{
            key[words[i]] = 1;
        }
    }
    
    for (let value in key){
        if (key[value] === 1)
            result.push(value);
    }
    
    return result;
    
    
};