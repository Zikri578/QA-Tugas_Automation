// Soal Nomor 2

let productBin = {
    "requestId": null,
    "data": [
        {
            "id": 100000057465,
            "storageId": 10000008207,
            "code": "A01-01-01-A",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 76,
            "createdTime": "2021-12-21T13:54:48Z",
        },
        {
            "id": 100000057466,
            "storageId": 10000002181,
            "code": "A01-01-01-B",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 71,
            "createdTime": "2021-12-21T13:54:48Z",
        },
        {
            "id": 100000065224,
            "storageId": 10000008884,
            "code": "Tgt00-A-A-01",
            "productId": 110000081009,
            "productName": "FloBrand-DressBSPink",
            "productCode": "FBR00040101",
            "quantity": 10,
            "createdTime": "2022-02-08T10:35:19Z",
        }
    ],
    "message": "success"
};

// Membuat function calculateTotalQuantity dengan parameternya productBin dan productCode
function calculateTotalQuantity(productBin, productCode) {
    // melakukan inisialisasi totalQuantity dengan nilai awal 0
    let totalQuantity = 0;

    // melakukan perulangan for untuk
    for (let i = 0; i < productBin.data.length; i++) {
        // mengiterasi setiap elemen dalam array productBin.data[i] kedalam variabel product
        let product = productBin.data[i];

        // melakukan pengkondisian jika productCode pada objek product sama dengan nilai productCode 
        if (product.productCode === productCode) {
            // maka quantity dari objek product tersebut akan ditambahkan 
            totalQuantity += product.quantity;
        }
    }
    // mengembalikan nilai totalQuantity
    return totalQuantity;
}

// melakukan inisialisasi productCode dengan valuenya FBR00040101
let productCode = "FBR00040101";

// melakukan inisialisasi totalQuantity dengan memanggil calculateTotalQuantity dengan parameternya productBin dan productCode
let totalQuantity = calculateTotalQuantity(productBin, productCode);

// menampilkan output totalQuantity
console.log("Total quantity for productCode", productCode, "is", totalQuantity);