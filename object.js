var makanan = {
    namaDepan : "ikan",
    namaBelakang : "bakar",

    tampilkan : function () {
        console.log(`nama ${this.namaDepan} ${this.namaBelakang}`);
    }
}

console.log(makanan.namaDepan);
makanan.tampilkan()