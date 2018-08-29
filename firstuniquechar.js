/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++){
      let a = s[i];
      let b = '0';
      let repeat = 0;
      for (let j = 0; j < s.length; j++){
          b = s[j];
          if (a === b && i !== j){
              repeat = 1;
              break;
          }
      }
      if (repeat === 0){
          return i;
      }
    }
    return -1;
};