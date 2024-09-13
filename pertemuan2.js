// // no 1
// let umur = prompt(`masukan umur anda: `)

// umur > 18 ? alert("anda dewasa") : alert("anda zigot")


// no 2
// for (i = 1; i < 100; i++) {
//     if ( i % 3 == 0 && i % 5 == 0){
//         console.log('fizzbuzz')
//     } else if (i % 3 == 0) {
//         console.log('fizz')
//     } else if (i % 5 == 0) {
//         console.log('buzz')
//     }
// }

// no 3

let harga = 20000
const diskon = 50/100


const jualan = (harga, diskon) => {
    return harga * diskon
}

let hasil = jualan(harga, diskon)
console.log(hasil)

