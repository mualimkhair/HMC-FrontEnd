function pesanMakanan(namaMakanan, waktuPembuatan) {
  return new Promise((resolve, reject) => {
    const estimationTime = waktuPembuatan;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan makanan dalam ${inSecond} detik`);

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Maaf, makanan gagal dibuatkan."));
        return;
      }

      console.log("Pramusaji selesai membuat makanan.");
      resolve(namaMakanan);
    }, estimationTime);
  });
}


function antarMakanan(namaMakanan, waktuAntar) {
  return new Promise((resolve, reject) => {
    const estimationTime = waktuAntar;
    let isSuccess = false;

    console.log("Pramusaji sedang mengantarkan makanan pesanan");

    setTimeout(() => {
      const number = Math.random();
      if (number > 0.1) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error("Maaf, kopi gagal diantarkan."));
        return;
      }

      console.log(`${namaMakanan} sudah diantar`);
      resolve(namaMakanan);
    }, estimationTime);
  });
}

const order = "ayam goreng";

console.log(`Saya memesan ${order} di kafe.`);

pesanMakanan(order)
  .then((value) => {
    return antarMakanan(value);
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
  });
