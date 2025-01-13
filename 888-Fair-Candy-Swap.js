/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(alice, bobSizes) {
    let aliceSum = alice.reduce((a,c)=> a+c,0)
    let num = (alice.reduce((a,c)=> a+c,0) + bobSizes.reduce((a,c)=> a+c,0)) / 2
    let bob = new Set(bobSizes)
    
    for(let i = 0; i < alice.length; i++){
        let stuff = num - (aliceSum - alice[i])
        if(bob.has(stuff)) return [alice[i], stuff]
    }
};