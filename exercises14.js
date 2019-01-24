/*
Problem

Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password 
(harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang 
    diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di 
passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals(str) {
    //code di sini
    var temp = '';
    var flag = false
    var chaged = [
        ['a', 'b'],
        ['e', 'f'],
        ['i', 'j'],
        ['o', 'p'],
        ['u', 'v'],
        ['A', 'B'],
        ['E', 'F'],
        ['I', 'J'],
        ['O', 'P'],
        ['U', 'V'],
    ]

    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < chaged.length; j++) {
            if (str[i] === chaged[j][0]) {
                temp += chaged[j][1];
                flag = true
            }
        }
        if (!flag) {
            temp += str[i];
        }
        flag = false
    }
    return temp
}

// console.log(changeVocals('Sergei Dragunov'))

function reverseWord(str) {
    //code di sini
    // var beforeReverse = changeVocals(str)
    var temp = ''
    for (var i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }
    return temp
}
// console.log(reverseWord('Sergei Dragunov'))

function setLowerUpperCase(str) {
    //code di sini
    var kecil = 'abcdefghijklmnopqrstuvwxyz'
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var temp = ''
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < kecil.length - 1; j++) {
            if (kecil[j] === str[i]) {
                temp += besar[j]
            } else if (besar[j] === str[i]) {
                temp += kecil[j]
            }

        }
        if (str[i] === ' ') {
            temp += ' '
        }
    }
    return temp

}
// console.log(setLowerUpperCase('Sergei Dragunov'))

function removeSpaces(str) {
    //code di sini
    var temp = ''
    for (var i = 0; i < str.length; i++) {

        if (str[i] === ' ') {
            temp += ''
        } else {
            temp += str[i]
        }
    }
    return temp
}
// console.log(removeSpaces('Sergei Dragunov'))


function passwordGenerator(name) {
    //code di sini
    if (name.length <= 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        var changeVoc = changeVocals(name)
        var reverse = reverseWord(changeVoc)
        var setLowUp = setLowerUpperCase(reverse)
        var delSpace = removeSpaces(setLowUp)

        return delSpace
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'