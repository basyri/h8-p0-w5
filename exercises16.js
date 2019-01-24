// // Problem

// // Diberikan sebuah function totalDigitRekursif(angka) yang menerima 
// satu parameter berupa angka. Function akan me-return nilai total dari 
// digit tersebut dengan menambahkan satu per satu angka dari digit paling 
// depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih 
// rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

// // Contoh:

// // 512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, 
// berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.

function totalDigitRekursif(angka) {
    // you can only write your code here!
    var toString = String(angka)
    // var totalDig
    if (toString.length === 1) {
        return angka
    } else {
        var first = Number(toString[0])
        // console.log(first)
        var sisa = Number(toString.slice(1))
        // console.log(Number(sisa))
        return first + totalDigitRekursif(sisa)
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5