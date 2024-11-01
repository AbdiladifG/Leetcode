/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let l = []
  for(let i= 0; i<s.length; i++){
    let cur = s[i]
    if(cur == '(' || cur == '[' ||cur == '{' ){
      l.push(cur)
    }
    else if(l.length === 0 || (l[l.length -1 ] != '(' && cur == ')') 
            || (l[l.length -1 ] != '{' && cur == '}')
            || (l[l.length -1 ] != '[' && cur == ']')) {
      return false
    }
    else{
      l.pop()
    }
  }
  return l.length === 0
};