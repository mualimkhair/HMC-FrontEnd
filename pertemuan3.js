// no. 1
const buatMobil = (noPlat, nama, brand, warna, bahanBakar, maksimalPenumpang) => {
  let mobil = {};

  mobil.noPlat = noPlat;
  mobil.nama = nama;
  mobil.brand = brand;
  mobil.warna = warna;
  mobil.bahanBakar = bahanBakar;
  mobil.maksimalPenumpang = maksimalPenumpang;

  return mobil;
};

mobil1 = buatMobil("sfdfd", "Brio", "Honda", "Putih dan Hitam", "pertalite", 5);
mobil2 = buatMobil("ertyu", "HR-V", "Honda", "Hitam dan Putih", "Bensin", 8);
mobil3 = buatMobil("asdfg", "Fortuner", "Toyota", "Hitam dan Putih", "Pertamax", 10);
mobil4 = buatMobil("qwert", "Avanza", "Toyota", "Merah dan Hitam", "Pertalite", 6);
mobil5 = buatMobil("zxcvb", "Aventador", "Lamborghini", "Kuning dan Merah", "Avtur", 4);

// no. 2
const tess = () => {
  let semuaMobil = [mobil1, mobil2, mobil3, mobil4, mobil5];
  
  for (i = 0; i < semuaMobil.length; i++) {
    if (i == 0) {
      console.log(semuaMobil[0]);
    } else if (i == 1) {
      console.log(semuaMobil[1]);
    } else if (i == 2) {
      console.log(semuaMobil[2]);
    } else if (i == 3) {
      console.log(semuaMobil[3]);
    } else if (i == 4) {
      console.log(semuaMobil[4]);
    }
  }
  return;
};

// no. 3
// sa kurang paham maksud nomor 3 kak

// no.4
const tombol = document.getElementById("tombol");

tombol.addEventListener("click", tess);
