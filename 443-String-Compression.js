/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let x = chars[0]
    let c = 0
    let res = 0

    for(let i = 0; i <= chars.length; i++){
        if(chars[i] != x){
            if(c == 1){
                chars[res] = x
                res ++
            }
            else{
                chars[res] = x
                res ++
                let nums = c.toString().split(\\)
                nums.forEach(x=> {
                    chars[res] = x
                    res ++
                })
            }
            x= chars[i]
            c=0
            
        }
        c++
    }

    return res
};