function hapusSimbol(str) {
    var result = ""
    for (var i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/gi) || str[i].match(/[0-9/]/)) {
            result = result + str[i]
        }
    }
    return result
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100