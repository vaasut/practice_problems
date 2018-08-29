/**
 * @param {number} n
 * @return {string}
 */

var helperCas = function(last){
    if (last.length === 0){
        return "1";
    }
    
    else{
        let current = last[0];
        let count = 0;
        let result = "";
        
        for (let i = 0; i < last.length; i++){
            if (last[i] === current){
                count ++;
            }
            else{
                result += count + "" + current;
                count = 1;
                current = last[i];
            }
        }
        
        result += count + "" + current;
        return result;
    }
    
    
}


var countAndSay = function(n) {
    if (n === 0){
        return "";
    }
    else{
        let last = "";
        for (let i = 0 ; i < n; i++){
            last = helperCas(last);
        }
        return last;
    }
    
};