const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log("---------------------------------------------------");
  const queryParams = req.query.path;
  let Resdata = readDir(queryParams);

  res.send(Resdata);
});

const readDir = (dir) => {
  try {
    const files = fs.readdirSync(dir, (err, files) => {
      console.log(err);
      return files;
    });

    let reqData = [];

    files.forEach((data) => {
      const filePath = path.join(dir, data);
      const fileStat = fs.statSync(filePath);
      if (fileStat.isDirectory()) {
        reqData.push({
          name: data,
          type: "dir",
        });
      }
      if (fileStat.isFile()) {
        reqData.push({
          name: data,
          type: "file",
        });
      }
    });

    return { data: reqData, message: "success" };
  } catch (error) {
    console.log(error);
    return { data: [], message: error.message, status: 400 };
  }
};

module.exports = router;
