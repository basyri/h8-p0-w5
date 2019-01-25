/*
Problem

Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar 
dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). 
Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
    // code di sini
    var max = 0
    for (var i = 1; i < arrNumber.length; i++) {
        if (arrNumber[i] > max) {
            max = arrNumber[i]
        }
    }

    var finalRes = []
    for (var j = 0; j < arrNumber.length; j++) {
        if (arrNumber[j] === max) {
            finalRes.push(arrNumber[j])
        }
    }

    return finalRes
}

// console.log(sorting([122, 122, 130, 100, 135, 100, 135, 150]))

function getTotal(arrNumber) {
    // code di sini
    var counter = 0

    for (var i = 0; i < arrNumber.length; i++) {
        counter++
    }
    return counter
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    if (arrNumber.length === 0) {
        return ''
    } else {
        return 'angka paling besar adalah ' + listSort[0] + ' dan jumlah kemunculan sebanyak ' + countHighest + ' kali';
    }
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));