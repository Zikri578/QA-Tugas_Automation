// mengimpor modul prompt-sync dan membuat objek prompt yang akan digunakan untuk menerima input dari pengguna.
const prompt = require('prompt-sync')();

// membuat function calculateSquareRoot
function calculateSquareRoot() {
    // membuat variabel x untuk menginput bilangan genap
    const x = parseInt(prompt('Masukkan bilangan genap: '));

    // melakukan pengkondisian jika x kecil dari 0
    if (x < 0) {
        // maka akan menampilkan 'Tidak bisa input bilangan negatif'
        console.log('Tidak bisa input bilangan negatif');
        // mengembalikan nilai diatas
        return;
    }

    // jika x sisa dibagi 2 tidak menghasilkan 0  
    if (x % 2 !== 0) {
        // maka akan menampilkan 'Tidak bisa input bilangan ganjil'
        console.log('Tidak bisa input bilangan ganjil');
        // mengembalikan nilai diatas
        return;
    }

    // membuat variabel squareRoot untuk menghitung akar kuadrat dari suatu bilangan.
    const squareRoot = Math.sqrt(x);
    // menampilkan output hasil perhitungan akar kuadrat dari suatu bilangan
    console.log(`Akar pangkat 2 dari ${x} adalah ${squareRoot}`);
}

calculateSquareRoot();