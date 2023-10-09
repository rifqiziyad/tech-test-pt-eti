const fs = require("fs");
const path = require("path");

const filePath = __dirname + "/app";

//  *Membaca Daftar File dalam Sebuah Direktori
// fs.readdir(filePath, (err, files) => {
//   if (err) {
//     console.error("Gagal membaca direktori:", err);
//     return;
//   }

//   // 'files' adalah array yang berisi daftar nama file dalam direktori
//   files.forEach((file) => {
//     console.log(file);
//   });
// });

// *Membaca Konten dari Sebuah File
fs.readFile(filePath + "/ignica.com_(iPad Air).png", "utf8", (err, data) => {
  if (err) {
    console.error("Gagal membaca file:", err);
    return;
  }

  console.log("Konten file:");
  console.log(data);
});

// *Mengecek Apakah Sebuah Path adalah Direktori atau File
// fs.stat(filePath, (err, stats) => {
//   if (err) {
//     console.error("Gagal memeriksa path:", err);
//     return;
//   }

//   if (stats.isDirectory()) {
//     console.log("Ini adalah direktori.");
//   } else if (stats.isFile()) {
//     console.log("Ini adalah file.");
//   }
// });
