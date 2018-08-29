/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    dict = {"I": 1, "IV": 4, "V": 5, "IX": 9, "X":10, "XL": 40, "L": 50, 
"XC": 90, "C": 100, "CD" : 400, "D": 500, "CM" : 900, "M" : 1000}
    let num = 0;
    
    for (let i = 0; i < s.length; i ++){
        let char = s[i];
        let alt = s[i+1]
        if (dict[(char + alt)]){
            num += dict[(char+alt)];
            i++;
        }
        else{
            num += dict[char];
        }
    }
    
    return num;
    
};