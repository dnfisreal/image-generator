// This router is used to deal with /draw requests
const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const drawImage = require('../libs/canvas');

router.get('/', async (req, res) => {
  // Extract all the parameters from the given URL
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

  // Set the image file path
  const dirName = '/assets/';
  const dirPath = path.join(process.env.BLOCKLET_DATA_DIR, `${dirName}`);

  // Set the name of the file
  const index1 = imageID.lastIndexOf('/');
  const index2 = imageID.indexOf('.');
  const imageCategory = imageID.slice(index1 + 1, index2);

  const regex = /[^A-Za-z0-9]/g;
  const textName = textContent.replace(regex, '');

  const colorName = textColor.slice(1);

  const fileName = `${imageCategory},${imageWidth}*${imageHeight},${textName},${textSize},${topMargin}_and_${leftMargin},${textStyle},${colorName}.png`;
  const finalName = fileName.replaceAll(' ', '_');

  const filePath = path.resolve(dirPath, finalName);

  // Write the image to that file path
  /* eslint-disable */
  await fs.writeFile(filePath, image, function (err, result) {
    if (err) console.log('error', err);
  });

  // Send the path back to the front end
  const finalURL = `${process.env.BLOCKLET_APP_URL}/assets/${finalName}`;
  res.send(finalURL);
});

module.exports = router;
