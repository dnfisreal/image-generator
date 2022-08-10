const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const drawImage = require('../libs/canvas');

router.get('/', async (req, res) => {
  const imageID = req.query.id;
  const imageWidth = req.query.width;
  const imageHeight = req.query.height;

  const textContent = req.query.text;
  const textSize = req.query.size;
  const topMargin = req.query.top;
  const leftMargin = req.query.left;
  const textStyle = req.query.style;
  const textColor = req.query.color;

  const image = await drawImage(
    imageID,
    imageWidth,
    imageHeight,
    textContent,
    textSize,
    topMargin,
    leftMargin,
    textStyle,
    textColor
  );

  const dirName = '/assets/';
  const dirPath = path.join(process.env.BLOCKLET_DATA_DIR, `${dirName}`);

  const index1 = imageID.lastIndexOf('/');
  const index2 = imageID.indexOf('.');
  const imageCategory = imageID.slice(index1 + 1, index2);
  const colorName = textColor.slice(1);
  const fileName = `${imageCategory},${imageWidth}*${imageHeight},${textContent},${textSize},${topMargin}_and_${leftMargin},${textStyle},${colorName}.png`;
  const finalName = fileName.replaceAll(' ', '_');
  const filePath = path.resolve(dirPath, finalName);

  /* eslint-disable */
  await fs.writeFile(filePath, image, function (err, result) {
    if (err) console.log('error', err);
  });

  const finalURL = `${process.env.BLOCKLET_APP_URL}/assets/${finalName}`;
  res.send(finalURL);
});

module.exports = router;

// http://localhost:8096/draw?id=/statics/templates/education_1.jpg&width=900&height=600&text=oefjewonfn&size=30&top=45&left=50&style=Arial, Helvetica, sans-serif&color=red
