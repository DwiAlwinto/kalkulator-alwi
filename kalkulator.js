let tombol = document.querySelector(".kalkulator-tombol"); //ini harus menggunakan . # sesuai class atau id
let kalkulator = document.getElementById("kalkulator")

//console.log(tombol);

tombol.addEventListener("click", function(tulis) {
    //alert("Test")
    let tombolClick = tulis.target;
    let nilaiTombol = tombolClick.innerText;



    //kita cek kondisi ya dan buat kondisi ya
    if(nilaiTombol === "Clear"){ //jika nilai tombol === C, maka form kalkulator nilai ya akan noll atau dihapus
        kalkulator.value = "";
    }else if(nilaiTombol == "x"){
        kalkulator.value = kalkulator.value.slice(0, -1);
    }else if(nilaiTombol == "=") {
        kalkulator.value = eval(kalkulator.value); //eval ini fungsi untuk penambahan
    } else {
        kalkulator.value = kalkulator.value + nilaiTombol; //apa pun disi nilai angka ya sesuai akan dijumlah ya
    }

    //alert(nilaiTombol)
}) //tombol  di ubah fungsi ya menjadi bisa click trus jalankan funsi ya