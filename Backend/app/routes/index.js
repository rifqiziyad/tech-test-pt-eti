var express = require("express");
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", (req, res, next) => {
  console.clear();

  const queryParams = req.query.path;
  let Resdata = readDir(queryParams);

  res.send(Resdata);
});

const readDir = (path) => {
  //  *Membaca Daftar File dalam Sebuah Direktori
  const files = fs.readdirSync(path, (err, files) => {
    if (err) {
      console.error("Gagal membaca direktori:", err);
      return;
    }

    return files;
  });

  return files;
};

module.exports = router;
