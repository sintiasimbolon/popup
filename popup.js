alert('selamat datang')
var coba = true;
while (coba == true) {
    var nama = prompt ('masukan nama')
        alamat = prompt ('masukan alamat')
        umur = prompt ('masukan umur')

        alert('hallo ${nama}\nalamat ${alamat}\numur ${umur}');
        coba = confirm ('coba lagi');
}
alert('terima kasih');