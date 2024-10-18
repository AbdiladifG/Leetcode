/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let c = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 && (flowerbed[i - 1] == 0 || flowerbed[i - 1] == undefined) && (flowerbed[i + 1] == 0 || flowerbed[i + 1] == undefined)) {
            c++
            flowerbed = flowerbed.slice(0, i).concat(flowerbed.slice(i + 1))
        }
    }
    return c >= n
};