/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0
    let r = height.length-1
    let max = 0
    while(l < r){
        if((Math.min(height[l],height[r]) * (r-l)) > max){
            console.log(max)
            max = Math.min(height[l],height[r]) * (r-l)
            console.log(height[l],height[r], max)
        }

        if(height[l] > height[r]){
            r--
        }
        else{
            l++
        }

    }
    return max
};