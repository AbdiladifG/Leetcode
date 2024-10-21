/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let con = []
    let vow = []
    let result = []

    s.split(\\).forEach(x => {
        if (x.toLowerCase() == \a\ || x.toLowerCase() == \e\ || x.toLowerCase() == \i\ || x.toLowerCase() == \o\ || x.toLowerCase() == \u\) {
            vow.push(x)
        }
        else {
            con.push(x)
        }
    })
    vow.reverse()
    s.split(\\).forEach(x => {
        if (x.toLowerCase() == \a\ || x.toLowerCase() == \e\ || x.toLowerCase() == \i\ || x.toLowerCase() == \o\ || x.toLowerCase() == \u\) {
            result.push(vow[0])
            vow = vow.slice(1)
        }
        else {
            result.push(con[0])
            con = con.slice(1)
        }
    })
    return result.join(\\)
};